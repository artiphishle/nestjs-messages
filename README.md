# Nest.js Messages

## Nest CLI

```bash
# https://docs.nestjs.com/cli/overview

# Install Nest CLI
npm i -g @nestjs/cli

# Create new project
nest new nest-messages
cd nest-messages

# Run project
npm run start:dev

# Generate module
nest g module messages

# Generate controller (flat: no controller folder)
nest g controller messages/messages --flat
```

## Nest Request Decorators

| Decorator    | Description                     |
| ------------ | ------------------------------- |
| @Headers()   | Access header information       |
| @Body()      | Access the request body         |
| @Param('id') | Accesses request parameters     |
| @Query()     | Access request query parameters |

## Validation Pipe

At app bootstrap: Use a global validation pipe (middleware) to validate incoming request data.

```ts
app.useGlobalPipes(new ValidationPipe());
```

## Data Transfer Object (DTO)

Description of how an object looks like that is transported from A to B.

```ts
export class CreateMessageDto {
  @IsString()
  content: string;
}
```

The `emitDecoratorMetadata` allows DTO type information to survive compilation:

```ts
// TS: body type 'CreateMessageDto'
@Post()
createMessage(@Body() body: CreateMessageDto) {
  console.log(body);
}
```

```js
// JS: after compilation
__metadata('design:parmtypes', [create_message_dto_1.CreateMessageDto]);
```

### 📦 class-transformer

Imagine to get a plain JSON object. Class transformer turns a plain object into a instance of a class.

### 📦 class-validator

Handles validation using decorators.

## Dependency Injection (DI)

In the service file (and repository file) you have to add the `@Injectable()` decorator to the class (or use the `@Injectable()` decorator factory function

```ts
@Injectable()
export class MessagesService {}
```

In the Module file you have to add the service to the `providers` array:

```ts
@Module({
  controllers: [MessagesController],
  providers: [MessagesService],
})
```
