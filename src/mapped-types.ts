export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

type optional<T> = {
  [P in keyof T]?: T[P] | null;
};

type OptioalProfile = optional<Profile>;
