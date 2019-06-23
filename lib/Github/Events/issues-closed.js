const EventResponse = require('../EventResponse');

class IssueOpened extends EventResponse {
  constructor(...args) {
    super(...args, {
      description: `Weeee! An issue got closed!`,
    });
  }
  embed(data) {
    const issue = data.issue;
    const description = issue.body;

    return {
      description,
      color: 'E9642D',
      title: `Closed issue #${issue.number}: \`${issue.title}\``,
      url: issue.html_url,
    };
  }
  text(data) {
    let actor = data.sender;
    let issue = data.issue;
    return [
      `🛠 **${actor.login}** closed issue **#${issue.number}**: _${issue.title}_`,
      `<${issue.html_url}>`,
    ];
  }
}

module.exports = IssueOpened;