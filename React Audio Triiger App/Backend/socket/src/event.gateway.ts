import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('alertMessage')
  handleMessage(@MessageBody() alertMessage: string): void {    
    this.server.emit('alertMessage', alertMessage); 
  }
}
