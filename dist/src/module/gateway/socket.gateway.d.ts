import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Types } from "mongoose";
import { Socket } from "socket.io";
export declare class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
    constructor();
    private io;
    handleSayHiEvent(data: any, socket: Socket): void;
    handleConnection(socket: Socket): void;
    handleDisconnect(socket: Socket): void;
    handleProductQunantityChange(productId: Types.ObjectId | String, quantity: number): void;
}
