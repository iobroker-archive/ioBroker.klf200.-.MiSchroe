/** Declaration file generated by dts-gen */

declare module "net-ping" {
	import EventEmitter from "events";

	/**
	 * Error thrown when the destination is unreachable.
	 */
	export class DestinationUnreachableError extends Error {
		constructor(readonly source: any) {}
		name: "DestinationUnreachableError";
	}

	/**
	 * Error thrown when the packet is too big to be sent.
	 */
	export class PacketTooBigError extends Error {
		constructor(readonly source: any) {}
		name: "PacketTooBigError";
	}

	/**
	 * Error thrown when there is a parameter problem.
	 */
	export class ParameterProblemError extends Error {
		constructor(readonly source: any) {}
		name: "ParameterProblemError";
	}

	/**
	 * Error thrown when a redirect is received.
	 */
	export class RedirectReceivedError extends Error {
		constructor(readonly source: any) {}
		name: "RedirectReceivedError";
	}

	/**
	 * Error thrown when a request times out.
	 */
	export class RequestTimedOutError extends Error {
		constructor(readonly source: any) {}
		name: "RequestTimedOutError";
	}

	/**
	 * Error thrown when a source quench message is received.
	 */
	export class SourceQuenchError extends Error {
		constructor(readonly source: any) {}
		name: "SourceQuenchError";
	}

	/**
	 * Error thrown when the time to live (TTL) of a packet is exceeded.
	 */
	export class TimeExceededError extends Error {
		constructor(readonly source: any) {}
		name: "TimeExceededError";
	}

	export enum NetworkProtocol {
		IPv4 = 1,
		IPv6 = 2,
	}

	export type SessionOptions = {
		/**
		 * The network protocol to use (IPv4 or IPv6).
		 */
		networkProtocol?: NetworkProtocol;
		/**
		 * The size of the packet to send.
		 */
		packetSize?: number;
		/**
		 * The number of times to retry sending the packet.
		 */
		retries?: number;
		/**
		 * The session identifier.
		 */
		sessionId?: number;
		/**
		 * The timeout in milliseconds for each request.
		 */
		timeout?: number;
		/**
		 * The time to live (TTL) value for packets.
		 */
		ttl?: number;
	};

	export type pingHostCallbackType = (
		error: Error | null | undefined,
		target: string,
		sent: Date,
		rcvd: Date,
	) => void;

	export type ttlOrOptionsOptionsType = {
		/**
		 * The time to live (TTL) value for packets.
		 */
		ttl?: number;
		/**
		 * The maximum number of hop timeouts allowed.
		 */
		maxHopTimeouts?: number;
		/**
		 * The starting time to live (TTL) value for packets.
		 */
		startTtl?: number;
	};

	export type ttlOrOptionsType = ttlOrOptionsOptionsType | number;

	export type feedCallbackType = (
		error: Error | null | undefined,
		target: string,
		ttl: number,
		sent: Date,
		rcvd: Date,
	) => void;

	export type doneCallbackType = (error: Error | null | undefined, target: string) => void;

	export type requestType = {
		/**
		 * The identifier for the request.
		 */
		id?: number;
		/**
		 * The number of retries for the request.
		 */
		retries?: number;
		/**
		 * The timeout in milliseconds for the request.
		 */
		timeout?: number;
		/**
		 * The callback function to be called when the request is done.
		 */
		callback?: doneCallbackType;
		/**
		 * The target host for the request.
		 */
		target?: string;
		/**
		 * The time to live (TTL) value for the request.
		 */
		ttl?: number;
		/**
		 * The date and time when the request was sent.
		 */
		sent?: Date;
		/**
		 * The buffer containing the request data.
		 */
		buffer?: Buffer;
		/**
		 * The type of the request.
		 */
		type?: number;
		/**
		 * The code of the request.
		 */
		code?: number;
	};

	/**
	 * Represents a ping session for sending ICMP packets and handling responses.
	 */
	export class Session extends EventEmitter {
		constructor(options?: SessionOptions);
		close(): void;
		pingHost(target: string, callback: pingHostCallbackType): Session;
		traceRoute(
			target: string,
			ttlOrOptions: ttlOrOptionsType,
			feedCallback: feedCallbackType,
			doneCallback: doneCallbackType,
		): void;
		flush(error: Error | null | undefined): void;
		getSocket(): any;

		fromBuffer(buffer: Buffer): requestType;

		onBeforeSocketSend(req: requestType): void;

		onSocketClose(): void;

		onSocketError(error: any): void;

		onSocketMessage(buffer: Buffer, source: string): void;

		onSocketSend(req: requestType, error: Error | null | undefined, bytes: any): void;

		onTimeout(req: requestType): void;

		reqQueue(req: requestType): Session;

		reqRemove(id: number): requestType;

		send(req: requestType): void;

		setTTL(ttl: number): void;

		toBuffer(req: requestType): Buffer;

		// traceRouteCallback(trace: any, req: requestType, error: Error, target: string, sent: Date, rcvd: Date): void;

		on(event: "close", listener: () => void): this;
		on(event: "error", listener: (error: Error) => void): this;
	}

	export function createSession(options?: SessionOptions): Session;
}
