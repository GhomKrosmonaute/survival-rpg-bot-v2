import * as app from "../app"
import cp from "child_process"

let sp: cp.ChildProcess | null = null

const command: app.Command = {
  name: "terminal",
  aliases: ["term", "cmd", "command", "exec", ">", "process", "shell"],
  description: "Run shell command from Discord",
  botOwnerOnly: true,
  coolDown: 5000,
  rest: {
    all: true,
    name: "cmd",
    description: "The cmd to run",
    required: true,
  },
  async run(message) {
    message.triggerCoolDown()

    const toEdit = await message.channel.send(
      new app.MessageEmbed().setTitle("The process is running...")
    )

    cp.exec(message.rest, { cwd: process.cwd() }, (err, stdout, stderr) => {
      const output = err
        ? err.stack ?? err.message
        : stderr.trim() || stdout || null

      const embed = new app.MessageEmbed().setTitle(
        err ? "\\❌ An error has occurred." : "\\✔ Successfully executed."
      )

      if (output)
        embed.setDescription(
          app.code.stringify({
            content: output
              .split("")
              .reverse()
              .slice(0, 2000)
              .reverse()
              .join(""),
          })
        )

      toEdit.edit(embed).catch(() => {
        message.channel.send(embed).catch()
      })
    })
  },
  subs: [
    {
      name: "spawn",
      aliases: ["sp", "watch"],
      description: "Watch shell command",
      botOwnerOnly: true,
      coolDown: 5000,
      rest: {
        all: true,
        name: "cmd",
        description: "The cmd to run",
        required: true,
      },
      async run(message) {
        message.triggerCoolDown()

        const embed = new app.MessageEmbed().setTitle(
          "The process is running..."
        )
        const toEdit = await message.channel.send(embed)

        const editInterval = 1000
        const logLines = 20
        const logs: string[] = []
        let lastEdit = Date.now()

        const edit = (e = embed) => {
          toEdit.edit(e).catch(() => message.channel.send(e).catch())
        }

        const log = (...parts: string[]) => {
          logs.push(parts.join(" "))
          if (logs.length > logLines) {
            logs.pop()
          }
          if (Date.now() > lastEdit + editInterval) {
            lastEdit = Date.now()
            edit(
              embed.setDescription(
                app.code.stringify({
                  lang: "yml",
                  content: logs.slice().reverse().join("\n").slice(-1000),
                })
              )
            )
          }
        }

        sp = cp.spawn(message.rest, { cwd: process.cwd(), shell: true })

        sp.stdout?.on("data", (data) => log(`${data}`.trim()))
        sp.stderr?.on("data", (data) => log(`${data}`.trim()))

        sp.on("close", (code) => {
          sp = null
          edit(
            embed
              .setTitle(
                code !== null && code > 0
                  ? "\\❌ An error has occurred."
                  : "\\✔ Successfully executed."
              )
              .setDescription(
                app.code.stringify({
                  lang: "yml",
                  content: logs.slice().reverse().join("\n"),
                })
              )
          )
        })
      },
      subs: [
        {
          name: "kill",
          aliases: ["exit", "stop"],
          botOwnerOnly: true,
          description: "Stop the spawned process",
          async run(message) {
            return message.channel.send(
              sp
                ? `The process is ${sp.kill(0) ? "killed" : "not killed..."}`
                : "No process running"
            )
          },
        },
      ],
    },
  ],
}

module.exports = command
