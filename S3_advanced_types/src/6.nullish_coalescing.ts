// the difference between || and ??
// || checks => 0, "", null, undefined
// ?? checks => null, undefined

//for example the "" or 0 value is acceptable for us so we should use ?? in our conditions
const musicVolume = 0;

const result = musicVolume || 1; //1
const result1 = musicVolume ?? 1; //0
