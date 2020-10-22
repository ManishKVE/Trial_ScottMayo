export interface IJob {
    jobId: number;
    title: string;
    description: string;
    department: string;
    jobStatus: boolean;
    location: string;
    hiringManager: string;
    date: Date;
}
