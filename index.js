'use strict'

const core = require('@actions/core')
const { GitHub, context } = require('@actions/github')

const main = async () => {
  const token = core.getInput('github-token')
  const number = core.getInput('number')
  const method = core.getInput('method')

  const octokit = new GitHub(token)

  await octokit.pulls.merge({
    ...context.repo,
    pull_number: number,
    merge_method: method
  })
}

main().catch(err => core.setFailed(err.message))
