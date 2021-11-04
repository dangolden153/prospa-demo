// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Chatroom, Message, ChatroomUser, User } = initSchema(schema);

export {
  Chatroom,
  Message,
  ChatroomUser,
  User
};