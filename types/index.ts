export interface ITodo {
    _id: string;
    title: string;
    completed: boolean;
}

export type EditTodoFunction = (id: string, newValue: { [key: string]: string | boolean }) => void;