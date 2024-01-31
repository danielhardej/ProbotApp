module.exports = (app) => {
  app.log.info("Yay, the app was loaded!");
  app.on("issues.opened", async (context) => {
    context.log("Yay, the app was loaded and an issue was opened!");
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    const issueAssignees = context.issue({
      assignees: "danielhardej",
    });
    context.octokit.issues.addAssignees(issueAssignees);
    context.octokit.issues.createComment(issueComment);
    app.log.info(`Issue opened: ${context.payload.issue.number}, Assignees added: ${issueAssignees.assignees}, Comment created: ${issueComment.body}`);
    context.log(`Issue opened: ${context.payload.issue.number}, Assignees added: ${issueAssignees.assignees}, Comment created: ${issueComment.body}`);
  });
};