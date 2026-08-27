const Task = require('../src/task');

describe('Task Labels', () => {
    test('should add a label', () => {
        const task = new Task('Test', 'Description');

        expect(task.addLabel('backend')).toBe(true);
        expect(task.labels).toEqual(['backend']);
    });

    test('should not add duplicate labels', () => {
        const task = new Task('Test', 'Description');

        task.addLabel('backend');
        task.addLabel('backend');

        expect(task.labels).toEqual(['backend']);
    });

    test('should not allow more than five labels', () => {
        const task = new Task('Test', 'Description');

        ['one', 'two', 'three', 'four', 'five'].forEach(label => {
            task.addLabel(label);
        });

        expect(task.addLabel('six')).toBe(false);
        expect(task.labels).toHaveLength(5);
    });
});