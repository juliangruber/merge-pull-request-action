# merge-pull-request-action

A simple GitHub Action for merging pull requests.

## Usage

```yaml
steps:
  - name: Merge Pull Request
    uses: juliangruber/merge-pull-request-action@v1
    with:
      github-token: ${{ secrets.GITHUB_TOKEN }}
      number: 1
      method: squash
```

## Related

- [find-pull-request-action](https://github.com/juliangruber/find-pull-request-action) &mdash; Find a Pull Request
- [approve-pull-request-action](https://github.com/juliangruber/approve-pull-request-action) &mdash; Approve a Pull Request

## License

MIT
