type RequestType = "POST" | "GET" | "DELETE";

// async function fetchRequest<T = any>(url: string): Promise<Awaited<T>>;
// async function fetchRequest<T = any>(url: string, config: RequestInit): Promise<Awaited<T>>;
// async function fetchRequest<T = any, B = any>(url: string, config: RequestInit, data: B): Promise<Awaited<T>>;
// async function fetchRequest<T = any, B = any>(url: string, config?: HeadersInit, data?: B): Promise<Awaited<T>> {
//   const res = await fetch(url, {
//     method: 'POST',
//     headers: config,
//     body: JSON.stringify({
//       ...data,
//     })
//   })
// }

export default {};
