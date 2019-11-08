# merge-pull-request-action

A simple GitHub Action for merging pull requests.

## Usage

```yaml
steps:
  - uses: juliangruber/merge-pull-request-action@master
    with:
      github-token: ${{ secrets.GITHUB_TOKEN }}
      number: 1
      method: squash
```

## License

MIT
