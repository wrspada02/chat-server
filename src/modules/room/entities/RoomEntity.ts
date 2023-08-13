import { Schema, model } from "mongoose";
import { IRoomDto } from "../dto/IRoomDto";

const roomSchema = new Schema<IRoomDto>({
  room_id: String,
  password: String,
  is_private: Boolean,
  messages: [{
    content: String,
    sender: {
      login: String,
      avatar_url: String,
    },
  }],
  owner: {
    login: String,
    avatar_url: String,
  },
  group_people: [{
    login: String,
    avatar_url: String,
  }],
  max_users: Number,
});

export const Room = model('Room', roomSchema);
