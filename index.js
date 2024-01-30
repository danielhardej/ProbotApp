/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app, context) => {
  app.log.info("Yay, the app was loaded!");
  context.log("Yay, the app was loaded!");
  app.on("issues.opened", async (probotContext) => {
    const issueComment = probotContext.issue({
      body: "Thanks for opening this issue!",
    });
    const issueAssignees = probotContext.issue({
      assignees: "danielhardej",
    });
    probotContext.octokit.issues.addAssignees(issueAssignees);
    probotContext.octokit.issues.createComment(issueComment);

    context.log(`Issue opened: ${probotContext.issue}, Assignees added: ${issueAssignees}, Comment created: ${issueComment}`);
  });
};