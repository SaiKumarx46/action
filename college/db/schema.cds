namespace sai;

entity student{
key sid:Integer; // key is mandatory
sname:String;
}

entity teacher{
key tid:UUID; // uuid is a id auto generator All caps
// no need give fild for uuid in csv file
tname:String;
}