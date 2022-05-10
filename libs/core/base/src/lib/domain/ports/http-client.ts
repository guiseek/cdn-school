export abstract class HttpClient {
  abstract get<T>(url: string): Promise<T>;
  abstract post<T, D>(url: string, data: D): Promise<T>;
  abstract put<T, D>(url: string, data: Partial<D>): Promise<T>;
  abstract patch<T, D>(url: string, data: Partial<D>): Promise<T>;
  abstract delete<T>(url: string): Promise<T>;
}
