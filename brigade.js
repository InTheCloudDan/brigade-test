const { events, Job } = require("brigadier")

function run(e, project) {
  console.log("hello default script")
}

events.on("Pod:Pulled", run)