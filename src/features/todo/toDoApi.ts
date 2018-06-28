const todos: string[] = [
    "test3",
    "test4"
];

class TodoApi {
    public static getAllTodos(): Promise<string[]>
    {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(todos);
            }, 1000);
        });
    }
}

export default TodoApi;