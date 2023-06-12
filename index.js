'use strict'

const core = require('@actions/core')
const { GitHub, context } = require('@actions/github')

const main = async () => {
  const token = core.getInput('github-token')
  const number = core.getInput('number')
  const method = core.getInput('method')
  const repoString = core.getInput('repo')

  let repoObject
  if (repoString) {
    const [owner, repo] = repoString.split('/')
    repoObject = { owner, repo }
  } else {
    repoObject = context.repo
  }

  const octokit = new GitHub(token)

  const response = await octokit.pulls.merge({
    ...repoObject,
    pull_number: number,
    merge_method: method
  })

  core.setOutput('commit', response.data.sha)
}

main().catch(err => core.setFailed(err.message))
