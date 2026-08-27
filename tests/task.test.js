const Task = require('../src/task');

describe('Task Priority', () => {
    test('should use medium priority by default', () => {
        const task = new Task('Test', 'Description');

        expect(task.priority).toBe('medium');
    });

    test('should set valid priority', () => {
        const task = new Task('Test', 'Description');

        expect(task.setPriority('high')).toBe(true);
        expect(task.priority).toBe('high');
    });

    test('should reject invalid priority', () => {
        const task = new Task('Test', 'Description');

        expect(task.setPriority('critical')).toBe(false);
        expect(task.priority).toBe('medium');
    });
});