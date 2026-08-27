## Task Methods

### setPriority(priority)

Sets task priority.

Valid values:

- `low`
- `medium`
- `high`
- `urgent`

Returns `boolean`:

- `true` if the priority was set;
- `false` if the priority is invalid.

New tasks have `medium` priority by default.

### addLabel(label)

Adds a unique label to the task.

A task can have no more than five labels.

Returns `true` if the label was added and `false` otherwise.