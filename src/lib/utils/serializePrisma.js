import superjson from "superjson";

export function serializePrisma(data) {
  return superjson.deserialize(superjson.serialize(data));
}
