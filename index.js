/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");
  context.log("Yay, the app was loaded!");
  app.on("issues.opened", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    const issueAssignees = context.issue({
      assignees: "danielhardej",
    });
    context.octokit.issues.addAssignees(issueAssignees);
    context.octokit.issues.createComment(issueComment);
    context.log(`Issue opened: ${context.issue}, Assignees added: ${issueAssignees}, Comment created: ${issueComment}`);
  });
};