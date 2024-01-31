module.exports = async function (app, context) {
  app.log.info("Yay, the app was loaded!");
  app.on("issues.opened", async (context) => {
    context.log("Context log: Yay, the app was loaded!");
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    const issueAssignees = context.issue({
      assignees: "danielhardej",
    });
    await context.octokit.issues.addAssignees(issueAssignees);
    await context.octokit.issues.createComment(issueComment);
    app.log.info(`App log: Issue opened: ${context.payload.issue.number}, Assignees added: ${issueAssignees.assignees}, Comment created: ${issueComment.body}`);
    context.log(`Context log: Issue opened: ${context.payload.issue.number}, Assignees added: ${issueAssignees.assignees}, Comment created: ${issueComment.body}`);
  });
};
