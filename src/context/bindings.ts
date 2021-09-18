export const REQUEST_CONTEXT = Symbol.for("request_context");
export interface IRequestContext {
  correlationId: string;
}
