# Gitter notify - Github action

A [GitHub Action](https://github.com/features/actions) to send github repository dispatch event.

## Usage

You can use this action after any other action. Here is an example setup of this action:

1. Create a `.github/workflows/dispatch.yml` file in your GitHub repo.
2. Add the following code to the `dispatch.yml` file.

```yml
on: [push]

jobs:
  dispatch_event:
    runs-on: ubuntu-latest
    name: Dispatch event

    steps:
    - uses: juztcode/repo-ditpatch-action@v1
      with:
        event-type: test_event
        token: ${{ secrets.REPO_ACCESS_TOKEN }}
        repository: juztcode/repo-ditpatch-action
```

3. You can create github personal access token with [this](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) steps.


## Inputs

Input             | Purpose
------------------|---------------------------------------------------------------------------------------------------------------------------------------
event-type        | Repository dispatch event type.
token             | Github personal access token (With repo scope).
repository        | Repository name to send dispatch event.
client-payload    | Client payload (JSON) to send with dispatch event.
