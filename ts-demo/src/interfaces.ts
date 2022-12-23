export interface ITodo {
    id: number
    name: string;
    description: string;
    dateAdded: Date;
    dateFinished?: Date;
    status?: TodoStatus;
}

export enum TodoStatus {
    started = "Started",
    pending = "Pending",
    finished = "Finished"
}