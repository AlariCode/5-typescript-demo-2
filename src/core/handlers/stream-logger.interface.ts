export interface IStreamLogger {
	log(...args: any[]): void;
	error(...args: any[]): void;
	end(): void;
}