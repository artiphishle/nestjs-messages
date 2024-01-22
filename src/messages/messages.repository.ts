import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

const store = 'messages.json';
const readJson = async (filename: string) =>
  JSON.parse(await readFile(filename, 'utf8'));

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const messages = await readJson(store);
    return messages[id];
  }
  async findAll() {
    const messages = await readJson(store);
    return messages;
  }
  async create(content: string) {
    const messages = await readJson(store);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };

    await writeFile(store, JSON.stringify(messages));
  }
}
