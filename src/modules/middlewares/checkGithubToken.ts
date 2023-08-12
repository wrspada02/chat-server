import axios from "axios";
import { NextFunction, Request, Response } from "express";
import { ICreateRoomDto } from "../room/dto/ICreateRoomDto";
import { UserRoom } from "../room/dto/IRoomDto";

interface GithubChecktoken {
  user: UserRoom;
}

export async function checkGithubToken(
  request: Request, 
  response: Response, 
  next: NextFunction) {
  const token = request.headers.authorization;

  const body = {
    access_token: token,
  }

  try {
    const githubOauthBasicAuthorization = await axios.post<GithubChecktoken>(
        `https://api.github.com/applications/${process.env.GITHUB_CLIENT_ID}/token`, 
        body, 
        { auth: 
          { 
           username: process.env.GITHUB_CLIENT_ID || '',
           password: process.env.GITHUB_CLIENT_SECRET || ''
          }
        }
      );

    if (githubOauthBasicAuthorization.status === 200) {
      const { login, avatar_url } = githubOauthBasicAuthorization.data.user;

      request.body.user = <UserRoom>{ login, avatar_url };
      next();
    } else {
      return response.status(401).send();
    }
  } catch (e) {
    return response.status(500).send();
  } 
}