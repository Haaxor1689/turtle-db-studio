
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.13.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.13.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.Area_templateScalarFieldEnum = {
  entry: 'entry',
  map_id: 'map_id',
  zone_id: 'zone_id',
  explore_flag: 'explore_flag',
  flags: 'flags',
  area_level: 'area_level',
  name: 'name',
  team: 'team',
  liquid_type: 'liquid_type'
};

exports.Prisma.Areatrigger_bg_entranceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  team: 'team',
  bg_template: 'bg_template',
  exit_map: 'exit_map',
  exit_position_x: 'exit_position_x',
  exit_position_y: 'exit_position_y',
  exit_position_z: 'exit_position_z',
  exit_orientation: 'exit_orientation'
};

exports.Prisma.Areatrigger_involvedrelationScalarFieldEnum = {
  id: 'id',
  quest: 'quest'
};

exports.Prisma.Areatrigger_tavernScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Areatrigger_teleportScalarFieldEnum = {
  id: 'id',
  name: 'name',
  message: 'message',
  required_level: 'required_level',
  required_condition: 'required_condition',
  target_map: 'target_map',
  target_position_x: 'target_position_x',
  target_position_y: 'target_position_y',
  target_position_z: 'target_position_z',
  target_orientation: 'target_orientation'
};

exports.Prisma.Areatrigger_templateScalarFieldEnum = {
  id: 'id',
  map_id: 'map_id',
  x: 'x',
  y: 'y',
  z: 'z',
  radius: 'radius',
  box_x: 'box_x',
  box_y: 'box_y',
  box_z: 'box_z',
  box_orientation: 'box_orientation'
};

exports.Prisma.Battleground_eventsScalarFieldEnum = {
  map: 'map',
  event1: 'event1',
  event2: 'event2',
  description: 'description'
};

exports.Prisma.Battleground_templateScalarFieldEnum = {
  id: 'id',
  min_players_per_team: 'min_players_per_team',
  max_players_per_team: 'max_players_per_team',
  min_level: 'min_level',
  max_level: 'max_level',
  alliance_win_spell: 'alliance_win_spell',
  alliance_lose_spell: 'alliance_lose_spell',
  horde_win_spell: 'horde_win_spell',
  horde_lose_spell: 'horde_lose_spell',
  alliance_start_location: 'alliance_start_location',
  horde_start_location: 'horde_start_location',
  player_loot_id: 'player_loot_id'
};

exports.Prisma.Battlemaster_entryScalarFieldEnum = {
  entry: 'entry',
  bg_template: 'bg_template'
};

exports.Prisma.Broadcast_textScalarFieldEnum = {
  entry: 'entry',
  male_text: 'male_text',
  female_text: 'female_text',
  chat_type: 'chat_type',
  sound_id: 'sound_id',
  language_id: 'language_id',
  emote_id1: 'emote_id1',
  emote_id2: 'emote_id2',
  emote_id3: 'emote_id3',
  emote_delay1: 'emote_delay1',
  emote_delay2: 'emote_delay2',
  emote_delay3: 'emote_delay3'
};

exports.Prisma.Cinematic_waypointsScalarFieldEnum = {
  cinematic: 'cinematic',
  timer: 'timer',
  position_x: 'position_x',
  position_y: 'position_y',
  position_z: 'position_z',
  comment: 'comment',
  id: 'id'
};

exports.Prisma.Companion_spellsScalarFieldEnum = {
  itemId: 'itemId',
  spellId: 'spellId'
};

exports.Prisma.ConditionsScalarFieldEnum = {
  condition_entry: 'condition_entry',
  type: 'type',
  value1: 'value1',
  value2: 'value2',
  value3: 'value3',
  value4: 'value4',
  flags: 'flags'
};

exports.Prisma.CreatureScalarFieldEnum = {
  guid: 'guid',
  id: 'id',
  id2: 'id2',
  id3: 'id3',
  id4: 'id4',
  map: 'map',
  position_x: 'position_x',
  position_y: 'position_y',
  position_z: 'position_z',
  orientation: 'orientation',
  spawntimesecsmin: 'spawntimesecsmin',
  spawntimesecsmax: 'spawntimesecsmax',
  wander_distance: 'wander_distance',
  health_percent: 'health_percent',
  mana_percent: 'mana_percent',
  movement_type: 'movement_type',
  spawn_flags: 'spawn_flags',
  visibility_mod: 'visibility_mod'
};

exports.Prisma.Creature_addonScalarFieldEnum = {
  guid: 'guid',
  display_id: 'display_id',
  mount_display_id: 'mount_display_id',
  equipment_id: 'equipment_id',
  stand_state: 'stand_state',
  sheath_state: 'sheath_state',
  emote_state: 'emote_state',
  auras: 'auras'
};

exports.Prisma.Creature_ai_eventsScalarFieldEnum = {
  id: 'id',
  creature_id: 'creature_id',
  condition_id: 'condition_id',
  event_type: 'event_type',
  event_inverse_phase_mask: 'event_inverse_phase_mask',
  event_chance: 'event_chance',
  event_flags: 'event_flags',
  event_param1: 'event_param1',
  event_param2: 'event_param2',
  event_param3: 'event_param3',
  event_param4: 'event_param4',
  action1_script: 'action1_script',
  action2_script: 'action2_script',
  action3_script: 'action3_script',
  comment: 'comment'
};

exports.Prisma.Creature_battlegroundScalarFieldEnum = {
  guid: 'guid',
  event1: 'event1',
  event2: 'event2'
};

exports.Prisma.Creature_display_info_addonScalarFieldEnum = {
  display_id: 'display_id',
  bounding_radius: 'bounding_radius',
  combat_reach: 'combat_reach',
  gender: 'gender',
  display_id_other_gender: 'display_id_other_gender'
};

exports.Prisma.Creature_equip_templateScalarFieldEnum = {
  entry: 'entry',
  equipentry1: 'equipentry1',
  equipentry2: 'equipentry2',
  equipentry3: 'equipentry3'
};

exports.Prisma.Creature_groupsScalarFieldEnum = {
  leader_guid: 'leader_guid',
  member_guid: 'member_guid',
  dist: 'dist',
  angle: 'angle',
  flags: 'flags'
};

exports.Prisma.Creature_involvedrelationScalarFieldEnum = {
  id: 'id',
  quest: 'quest'
};

exports.Prisma.Creature_linkingScalarFieldEnum = {
  guid: 'guid',
  master_guid: 'master_guid',
  flag: 'flag'
};

exports.Prisma.Creature_linking_templateScalarFieldEnum = {
  entry: 'entry',
  map: 'map',
  master_entry: 'master_entry',
  flag: 'flag',
  search_range: 'search_range'
};

exports.Prisma.Creature_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.Creature_movementScalarFieldEnum = {
  id: 'id',
  point: 'point',
  position_x: 'position_x',
  position_y: 'position_y',
  position_z: 'position_z',
  orientation: 'orientation',
  waittime: 'waittime',
  wander_distance: 'wander_distance',
  script_id: 'script_id'
};

exports.Prisma.Creature_movement_specialScalarFieldEnum = {
  id: 'id',
  point: 'point',
  position_x: 'position_x',
  position_y: 'position_y',
  position_z: 'position_z',
  orientation: 'orientation',
  waittime: 'waittime',
  wander_distance: 'wander_distance',
  script_id: 'script_id'
};

exports.Prisma.Creature_movement_templateScalarFieldEnum = {
  entry: 'entry',
  point: 'point',
  position_x: 'position_x',
  position_y: 'position_y',
  position_z: 'position_z',
  orientation: 'orientation',
  waittime: 'waittime',
  wander_distance: 'wander_distance',
  script_id: 'script_id'
};

exports.Prisma.Creature_onkill_reputationScalarFieldEnum = {
  creature_id: 'creature_id',
  RewOnKillRepFaction1: 'RewOnKillRepFaction1',
  RewOnKillRepFaction2: 'RewOnKillRepFaction2',
  MaxStanding1: 'MaxStanding1',
  IsTeamAward1: 'IsTeamAward1',
  RewOnKillRepValue1: 'RewOnKillRepValue1',
  MaxStanding2: 'MaxStanding2',
  IsTeamAward2: 'IsTeamAward2',
  RewOnKillRepValue2: 'RewOnKillRepValue2',
  TeamDependent: 'TeamDependent'
};

exports.Prisma.Creature_questrelationScalarFieldEnum = {
  id: 'id',
  quest: 'quest'
};

exports.Prisma.Creature_spellsScalarFieldEnum = {
  entry: 'entry',
  name: 'name',
  spellId_1: 'spellId_1',
  probability_1: 'probability_1',
  castTarget_1: 'castTarget_1',
  targetParam1_1: 'targetParam1_1',
  targetParam2_1: 'targetParam2_1',
  castFlags_1: 'castFlags_1',
  delayInitialMin_1: 'delayInitialMin_1',
  delayInitialMax_1: 'delayInitialMax_1',
  delayRepeatMin_1: 'delayRepeatMin_1',
  delayRepeatMax_1: 'delayRepeatMax_1',
  scriptId_1: 'scriptId_1',
  spellId_2: 'spellId_2',
  probability_2: 'probability_2',
  castTarget_2: 'castTarget_2',
  targetParam1_2: 'targetParam1_2',
  targetParam2_2: 'targetParam2_2',
  castFlags_2: 'castFlags_2',
  delayInitialMin_2: 'delayInitialMin_2',
  delayInitialMax_2: 'delayInitialMax_2',
  delayRepeatMin_2: 'delayRepeatMin_2',
  delayRepeatMax_2: 'delayRepeatMax_2',
  scriptId_2: 'scriptId_2',
  spellId_3: 'spellId_3',
  probability_3: 'probability_3',
  castTarget_3: 'castTarget_3',
  targetParam1_3: 'targetParam1_3',
  targetParam2_3: 'targetParam2_3',
  castFlags_3: 'castFlags_3',
  delayInitialMin_3: 'delayInitialMin_3',
  delayInitialMax_3: 'delayInitialMax_3',
  delayRepeatMin_3: 'delayRepeatMin_3',
  delayRepeatMax_3: 'delayRepeatMax_3',
  scriptId_3: 'scriptId_3',
  spellId_4: 'spellId_4',
  probability_4: 'probability_4',
  castTarget_4: 'castTarget_4',
  targetParam1_4: 'targetParam1_4',
  targetParam2_4: 'targetParam2_4',
  castFlags_4: 'castFlags_4',
  delayInitialMin_4: 'delayInitialMin_4',
  delayInitialMax_4: 'delayInitialMax_4',
  delayRepeatMin_4: 'delayRepeatMin_4',
  delayRepeatMax_4: 'delayRepeatMax_4',
  scriptId_4: 'scriptId_4',
  spellId_5: 'spellId_5',
  probability_5: 'probability_5',
  castTarget_5: 'castTarget_5',
  targetParam1_5: 'targetParam1_5',
  targetParam2_5: 'targetParam2_5',
  castFlags_5: 'castFlags_5',
  delayInitialMin_5: 'delayInitialMin_5',
  delayInitialMax_5: 'delayInitialMax_5',
  delayRepeatMin_5: 'delayRepeatMin_5',
  delayRepeatMax_5: 'delayRepeatMax_5',
  scriptId_5: 'scriptId_5',
  spellId_6: 'spellId_6',
  probability_6: 'probability_6',
  castTarget_6: 'castTarget_6',
  targetParam1_6: 'targetParam1_6',
  targetParam2_6: 'targetParam2_6',
  castFlags_6: 'castFlags_6',
  delayInitialMin_6: 'delayInitialMin_6',
  delayInitialMax_6: 'delayInitialMax_6',
  delayRepeatMin_6: 'delayRepeatMin_6',
  delayRepeatMax_6: 'delayRepeatMax_6',
  scriptId_6: 'scriptId_6',
  spellId_7: 'spellId_7',
  probability_7: 'probability_7',
  castTarget_7: 'castTarget_7',
  targetParam1_7: 'targetParam1_7',
  targetParam2_7: 'targetParam2_7',
  castFlags_7: 'castFlags_7',
  delayInitialMin_7: 'delayInitialMin_7',
  delayInitialMax_7: 'delayInitialMax_7',
  delayRepeatMin_7: 'delayRepeatMin_7',
  delayRepeatMax_7: 'delayRepeatMax_7',
  scriptId_7: 'scriptId_7',
  spellId_8: 'spellId_8',
  probability_8: 'probability_8',
  castTarget_8: 'castTarget_8',
  targetParam1_8: 'targetParam1_8',
  targetParam2_8: 'targetParam2_8',
  castFlags_8: 'castFlags_8',
  delayInitialMin_8: 'delayInitialMin_8',
  delayInitialMax_8: 'delayInitialMax_8',
  delayRepeatMin_8: 'delayRepeatMin_8',
  delayRepeatMax_8: 'delayRepeatMax_8',
  scriptId_8: 'scriptId_8'
};

exports.Prisma.Creature_templateScalarFieldEnum = {
  entry: 'entry',
  display_id1: 'display_id1',
  display_id2: 'display_id2',
  display_id3: 'display_id3',
  display_id4: 'display_id4',
  mount_display_id: 'mount_display_id',
  name: 'name',
  subname: 'subname',
  gossip_menu_id: 'gossip_menu_id',
  level_min: 'level_min',
  level_max: 'level_max',
  health_min: 'health_min',
  health_max: 'health_max',
  mana_min: 'mana_min',
  mana_max: 'mana_max',
  armor: 'armor',
  faction: 'faction',
  npc_flags: 'npc_flags',
  speed_walk: 'speed_walk',
  speed_run: 'speed_run',
  scale: 'scale',
  detection_range: 'detection_range',
  call_for_help_range: 'call_for_help_range',
  leash_range: 'leash_range',
  rank: 'rank',
  xp_multiplier: 'xp_multiplier',
  dmg_min: 'dmg_min',
  dmg_max: 'dmg_max',
  dmg_school: 'dmg_school',
  attack_power: 'attack_power',
  dmg_multiplier: 'dmg_multiplier',
  base_attack_time: 'base_attack_time',
  ranged_attack_time: 'ranged_attack_time',
  unit_class: 'unit_class',
  unit_flags: 'unit_flags',
  dynamic_flags: 'dynamic_flags',
  beast_family: 'beast_family',
  trainer_type: 'trainer_type',
  trainer_spell: 'trainer_spell',
  trainer_class: 'trainer_class',
  trainer_race: 'trainer_race',
  ranged_dmg_min: 'ranged_dmg_min',
  ranged_dmg_max: 'ranged_dmg_max',
  ranged_attack_power: 'ranged_attack_power',
  type: 'type',
  type_flags: 'type_flags',
  loot_id: 'loot_id',
  pickpocket_loot_id: 'pickpocket_loot_id',
  skinning_loot_id: 'skinning_loot_id',
  holy_res: 'holy_res',
  fire_res: 'fire_res',
  nature_res: 'nature_res',
  frost_res: 'frost_res',
  shadow_res: 'shadow_res',
  arcane_res: 'arcane_res',
  spell_id1: 'spell_id1',
  spell_id2: 'spell_id2',
  spell_id3: 'spell_id3',
  spell_id4: 'spell_id4',
  spell_list_id: 'spell_list_id',
  pet_spell_list_id: 'pet_spell_list_id',
  spawn_spell_id: 'spawn_spell_id',
  auras: 'auras',
  gold_min: 'gold_min',
  gold_max: 'gold_max',
  ai_name: 'ai_name',
  movement_type: 'movement_type',
  inhabit_type: 'inhabit_type',
  civilian: 'civilian',
  racial_leader: 'racial_leader',
  regeneration: 'regeneration',
  equipment_id: 'equipment_id',
  trainer_id: 'trainer_id',
  vendor_id: 'vendor_id',
  mechanic_immune_mask: 'mechanic_immune_mask',
  school_immune_mask: 'school_immune_mask',
  flags_extra: 'flags_extra',
  phase_quest_id: 'phase_quest_id',
  script_name: 'script_name'
};

exports.Prisma.Custom_character_skinsScalarFieldEnum = {
  token_id: 'token_id',
  skin_male: 'skin_male',
  skin_female: 'skin_female'
};

exports.Prisma.Custom_graveyardsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  map_id: 'map_id',
  zone_id: 'zone_id',
  area_id: 'area_id',
  max_level: 'max_level',
  map_gy_alliance: 'map_gy_alliance',
  gy_x_alliance: 'gy_x_alliance',
  gy_y_alliance: 'gy_y_alliance',
  gy_z_alliance: 'gy_z_alliance',
  orientation_alliance: 'orientation_alliance',
  map_gy_horde: 'map_gy_horde',
  gy_x_horde: 'gy_x_horde',
  gy_y_horde: 'gy_y_horde',
  gy_z_horde: 'gy_z_horde',
  orientation_horde: 'orientation_horde'
};

exports.Prisma.Disenchant_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.Exploration_basexpScalarFieldEnum = {
  level: 'level',
  basexp: 'basexp'
};

exports.Prisma.FactionScalarFieldEnum = {
  id: 'id',
  reputation_list_id: 'reputation_list_id',
  base_rep_race_mask1: 'base_rep_race_mask1',
  base_rep_race_mask2: 'base_rep_race_mask2',
  base_rep_race_mask3: 'base_rep_race_mask3',
  base_rep_race_mask4: 'base_rep_race_mask4',
  base_rep_class_mask1: 'base_rep_class_mask1',
  base_rep_class_mask2: 'base_rep_class_mask2',
  base_rep_class_mask3: 'base_rep_class_mask3',
  base_rep_class_mask4: 'base_rep_class_mask4',
  base_rep_value1: 'base_rep_value1',
  base_rep_value2: 'base_rep_value2',
  base_rep_value3: 'base_rep_value3',
  base_rep_value4: 'base_rep_value4',
  reputation_flags1: 'reputation_flags1',
  reputation_flags2: 'reputation_flags2',
  reputation_flags3: 'reputation_flags3',
  reputation_flags4: 'reputation_flags4',
  team: 'team',
  name1: 'name1',
  name2: 'name2',
  name3: 'name3',
  name4: 'name4',
  name5: 'name5',
  name6: 'name6',
  name7: 'name7',
  name8: 'name8',
  description1: 'description1',
  description2: 'description2',
  description3: 'description3',
  description4: 'description4',
  description5: 'description5',
  description6: 'description6',
  description7: 'description7',
  description8: 'description8'
};

exports.Prisma.Faction_templateScalarFieldEnum = {
  id: 'id',
  faction_id: 'faction_id',
  faction_flags: 'faction_flags',
  our_mask: 'our_mask',
  friendly_mask: 'friendly_mask',
  hostile_mask: 'hostile_mask',
  enemy_faction1: 'enemy_faction1',
  enemy_faction2: 'enemy_faction2',
  enemy_faction3: 'enemy_faction3',
  enemy_faction4: 'enemy_faction4',
  friend_faction1: 'friend_faction1',
  friend_faction2: 'friend_faction2',
  friend_faction3: 'friend_faction3',
  friend_faction4: 'friend_faction4'
};

exports.Prisma.Fishing_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.Game_eventScalarFieldEnum = {
  entry: 'entry',
  start_time: 'start_time',
  end_time: 'end_time',
  occurence: 'occurence',
  length: 'length',
  holiday: 'holiday',
  description: 'description',
  hardcoded: 'hardcoded',
  disabled: 'disabled'
};

exports.Prisma.Game_event_creatureScalarFieldEnum = {
  guid: 'guid',
  event: 'event'
};

exports.Prisma.Game_event_creature_dataScalarFieldEnum = {
  guid: 'guid',
  entry_id: 'entry_id',
  display_id: 'display_id',
  equipment_id: 'equipment_id',
  spell_start: 'spell_start',
  spell_end: 'spell_end',
  event: 'event'
};

exports.Prisma.Game_event_gameobjectScalarFieldEnum = {
  guid: 'guid',
  event: 'event'
};

exports.Prisma.Game_event_mailScalarFieldEnum = {
  event: 'event',
  raceMask: 'raceMask',
  quest: 'quest',
  mailTemplateId: 'mailTemplateId',
  senderEntry: 'senderEntry'
};

exports.Prisma.Game_event_questScalarFieldEnum = {
  quest: 'quest',
  event: 'event'
};

exports.Prisma.Game_graveyard_zoneScalarFieldEnum = {
  id: 'id',
  ghost_zone: 'ghost_zone',
  faction: 'faction'
};

exports.Prisma.Game_teleScalarFieldEnum = {
  id: 'id',
  position_x: 'position_x',
  position_y: 'position_y',
  position_z: 'position_z',
  orientation: 'orientation',
  map: 'map',
  name: 'name'
};

exports.Prisma.Game_weatherScalarFieldEnum = {
  zone: 'zone',
  copy_weather_from: 'copy_weather_from',
  spring_rain_chance: 'spring_rain_chance',
  spring_snow_chance: 'spring_snow_chance',
  spring_storm_chance: 'spring_storm_chance',
  summer_rain_chance: 'summer_rain_chance',
  summer_snow_chance: 'summer_snow_chance',
  summer_storm_chance: 'summer_storm_chance',
  fall_rain_chance: 'fall_rain_chance',
  fall_snow_chance: 'fall_snow_chance',
  fall_storm_chance: 'fall_storm_chance',
  winter_rain_chance: 'winter_rain_chance',
  winter_snow_chance: 'winter_snow_chance',
  winter_storm_chance: 'winter_storm_chance'
};

exports.Prisma.GameobjectScalarFieldEnum = {
  guid: 'guid',
  id: 'id',
  map: 'map',
  position_x: 'position_x',
  position_y: 'position_y',
  position_z: 'position_z',
  orientation: 'orientation',
  rotation0: 'rotation0',
  rotation1: 'rotation1',
  rotation2: 'rotation2',
  rotation3: 'rotation3',
  spawntimesecsmin: 'spawntimesecsmin',
  spawntimesecsmax: 'spawntimesecsmax',
  animprogress: 'animprogress',
  state: 'state',
  spawn_flags: 'spawn_flags',
  visibility_mod: 'visibility_mod'
};

exports.Prisma.Gameobject_battlegroundScalarFieldEnum = {
  guid: 'guid',
  event1: 'event1',
  event2: 'event2'
};

exports.Prisma.Gameobject_display_info_addonScalarFieldEnum = {
  display_id: 'display_id',
  min_x: 'min_x',
  min_y: 'min_y',
  min_z: 'min_z',
  max_x: 'max_x',
  max_y: 'max_y',
  max_z: 'max_z'
};

exports.Prisma.Gameobject_involvedrelationScalarFieldEnum = {
  id: 'id',
  quest: 'quest'
};

exports.Prisma.Gameobject_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.Gameobject_questrelationScalarFieldEnum = {
  id: 'id',
  quest: 'quest'
};

exports.Prisma.Gameobject_requirementScalarFieldEnum = {
  guid: 'guid',
  reqType: 'reqType',
  reqGuid: 'reqGuid'
};

exports.Prisma.Gameobject_templateScalarFieldEnum = {
  entry: 'entry',
  type: 'type',
  displayId: 'displayId',
  name: 'name',
  faction: 'faction',
  flags: 'flags',
  size: 'size',
  data0: 'data0',
  data1: 'data1',
  data2: 'data2',
  data3: 'data3',
  data4: 'data4',
  data5: 'data5',
  data6: 'data6',
  data7: 'data7',
  data8: 'data8',
  data9: 'data9',
  data10: 'data10',
  data11: 'data11',
  data12: 'data12',
  data13: 'data13',
  data14: 'data14',
  data15: 'data15',
  data16: 'data16',
  data17: 'data17',
  data18: 'data18',
  data19: 'data19',
  data20: 'data20',
  data21: 'data21',
  data22: 'data22',
  data23: 'data23',
  mingold: 'mingold',
  maxgold: 'maxgold',
  phase_quest_id: 'phase_quest_id',
  script_name: 'script_name'
};

exports.Prisma.Gm_subsurveysScalarFieldEnum = {
  surveyId: 'surveyId',
  subsurveyId: 'subsurveyId',
  rank: 'rank',
  comment: 'comment'
};

exports.Prisma.Gm_surveysScalarFieldEnum = {
  surveyId: 'surveyId',
  guid: 'guid',
  mainSurvey: 'mainSurvey',
  overallComment: 'overallComment',
  createTime: 'createTime'
};

exports.Prisma.Gm_ticketsScalarFieldEnum = {
  ticketId: 'ticketId',
  guid: 'guid',
  name: 'name',
  message: 'message',
  createTime: 'createTime',
  mapId: 'mapId',
  posX: 'posX',
  posY: 'posY',
  posZ: 'posZ',
  lastModifiedTime: 'lastModifiedTime',
  closedBy: 'closedBy',
  assignedTo: 'assignedTo',
  comment: 'comment',
  response: 'response',
  completed: 'completed',
  escalated: 'escalated',
  viewed: 'viewed',
  haveTicket: 'haveTicket',
  ticketType: 'ticketType',
  securityNeeded: 'securityNeeded'
};

exports.Prisma.Gossip_menuScalarFieldEnum = {
  entry: 'entry',
  text_id: 'text_id',
  condition_id: 'condition_id'
};

exports.Prisma.Gossip_menu_optionScalarFieldEnum = {
  menu_id: 'menu_id',
  id: 'id',
  option_icon: 'option_icon',
  option_text: 'option_text',
  OptionBroadcastTextID: 'OptionBroadcastTextID',
  option_id: 'option_id',
  npc_option_npcflag: 'npc_option_npcflag',
  action_menu_id: 'action_menu_id',
  action_poi_id: 'action_poi_id',
  action_script_id: 'action_script_id',
  box_coded: 'box_coded',
  box_money: 'box_money',
  box_text: 'box_text',
  BoxBroadcastTextID: 'BoxBroadcastTextID',
  condition_id: 'condition_id'
};

exports.Prisma.Guild_bankScalarFieldEnum = {
  guildid: 'guildid',
  guid: 'guid',
  tab: 'tab',
  slot: 'slot',
  item_template: 'item_template',
  creatorGuid: 'creatorGuid',
  giftCreatorGuid: 'giftCreatorGuid',
  count: 'count',
  duration: 'duration',
  charges: 'charges',
  flags: 'flags',
  enchantments: 'enchantments',
  randomPropertyId: 'randomPropertyId',
  transmogrifyId: 'transmogrifyId',
  durability: 'durability',
  text: 'text',
  generated_loot: 'generated_loot'
};

exports.Prisma.Guild_bank_logScalarFieldEnum = {
  log_id: 'log_id',
  guildid: 'guildid',
  player: 'player',
  action: 'action',
  tab: 'tab',
  item: 'item',
  randomPropertyId: 'randomPropertyId',
  enchant: 'enchant',
  count: 'count',
  stamp: 'stamp'
};

exports.Prisma.Guild_bank_moneyScalarFieldEnum = {
  guildid: 'guildid',
  money: 'money'
};

exports.Prisma.Guild_bank_tabsScalarFieldEnum = {
  id: 'id',
  guildid: 'guildid',
  tabs: 'tabs',
  name1: 'name1',
  name2: 'name2',
  name3: 'name3',
  name4: 'name4',
  name5: 'name5',
  icon1: 'icon1',
  icon2: 'icon2',
  icon3: 'icon3',
  icon4: 'icon4',
  icon5: 'icon5',
  withdrawal1: 'withdrawal1',
  withdrawal2: 'withdrawal2',
  withdrawal3: 'withdrawal3',
  withdrawal4: 'withdrawal4',
  withdrawal5: 'withdrawal5',
  minrank1: 'minrank1',
  minrank2: 'minrank2',
  minrank3: 'minrank3',
  minrank4: 'minrank4',
  minrank5: 'minrank5'
};

exports.Prisma.Instance_buff_removalScalarFieldEnum = {
  map_id: 'map_id',
  spell_id: 'spell_id',
  enabled: 'enabled',
  flags: 'flags',
  comment: 'comment'
};

exports.Prisma.Item_enchantment_templateScalarFieldEnum = {
  entry: 'entry',
  ench: 'ench',
  chance: 'chance'
};

exports.Prisma.Item_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.Item_required_targetScalarFieldEnum = {
  entry: 'entry',
  type: 'type',
  target_entry: 'target_entry'
};

exports.Prisma.Item_templateScalarFieldEnum = {
  entry: 'entry',
  class: 'class',
  subclass: 'subclass',
  name: 'name',
  description: 'description',
  display_id: 'display_id',
  quality: 'quality',
  flags: 'flags',
  buy_count: 'buy_count',
  buy_price: 'buy_price',
  sell_price: 'sell_price',
  inventory_type: 'inventory_type',
  allowable_class: 'allowable_class',
  allowable_race: 'allowable_race',
  item_level: 'item_level',
  required_level: 'required_level',
  required_skill: 'required_skill',
  required_skill_rank: 'required_skill_rank',
  required_spell: 'required_spell',
  required_honor_rank: 'required_honor_rank',
  required_city_rank: 'required_city_rank',
  required_reputation_faction: 'required_reputation_faction',
  required_reputation_rank: 'required_reputation_rank',
  max_count: 'max_count',
  stackable: 'stackable',
  container_slots: 'container_slots',
  stat_type1: 'stat_type1',
  stat_value1: 'stat_value1',
  stat_type2: 'stat_type2',
  stat_value2: 'stat_value2',
  stat_type3: 'stat_type3',
  stat_value3: 'stat_value3',
  stat_type4: 'stat_type4',
  stat_value4: 'stat_value4',
  stat_type5: 'stat_type5',
  stat_value5: 'stat_value5',
  stat_type6: 'stat_type6',
  stat_value6: 'stat_value6',
  stat_type7: 'stat_type7',
  stat_value7: 'stat_value7',
  stat_type8: 'stat_type8',
  stat_value8: 'stat_value8',
  stat_type9: 'stat_type9',
  stat_value9: 'stat_value9',
  stat_type10: 'stat_type10',
  stat_value10: 'stat_value10',
  delay: 'delay',
  range_mod: 'range_mod',
  ammo_type: 'ammo_type',
  dmg_min1: 'dmg_min1',
  dmg_max1: 'dmg_max1',
  dmg_type1: 'dmg_type1',
  dmg_min2: 'dmg_min2',
  dmg_max2: 'dmg_max2',
  dmg_type2: 'dmg_type2',
  dmg_min3: 'dmg_min3',
  dmg_max3: 'dmg_max3',
  dmg_type3: 'dmg_type3',
  dmg_min4: 'dmg_min4',
  dmg_max4: 'dmg_max4',
  dmg_type4: 'dmg_type4',
  dmg_min5: 'dmg_min5',
  dmg_max5: 'dmg_max5',
  dmg_type5: 'dmg_type5',
  block: 'block',
  armor: 'armor',
  holy_res: 'holy_res',
  fire_res: 'fire_res',
  nature_res: 'nature_res',
  frost_res: 'frost_res',
  shadow_res: 'shadow_res',
  arcane_res: 'arcane_res',
  spellid_1: 'spellid_1',
  spelltrigger_1: 'spelltrigger_1',
  spellcharges_1: 'spellcharges_1',
  spellppmrate_1: 'spellppmrate_1',
  spellcooldown_1: 'spellcooldown_1',
  spellcategory_1: 'spellcategory_1',
  spellcategorycooldown_1: 'spellcategorycooldown_1',
  spellid_2: 'spellid_2',
  spelltrigger_2: 'spelltrigger_2',
  spellcharges_2: 'spellcharges_2',
  spellppmrate_2: 'spellppmrate_2',
  spellcooldown_2: 'spellcooldown_2',
  spellcategory_2: 'spellcategory_2',
  spellcategorycooldown_2: 'spellcategorycooldown_2',
  spellid_3: 'spellid_3',
  spelltrigger_3: 'spelltrigger_3',
  spellcharges_3: 'spellcharges_3',
  spellppmrate_3: 'spellppmrate_3',
  spellcooldown_3: 'spellcooldown_3',
  spellcategory_3: 'spellcategory_3',
  spellcategorycooldown_3: 'spellcategorycooldown_3',
  spellid_4: 'spellid_4',
  spelltrigger_4: 'spelltrigger_4',
  spellcharges_4: 'spellcharges_4',
  spellppmrate_4: 'spellppmrate_4',
  spellcooldown_4: 'spellcooldown_4',
  spellcategory_4: 'spellcategory_4',
  spellcategorycooldown_4: 'spellcategorycooldown_4',
  spellid_5: 'spellid_5',
  spelltrigger_5: 'spelltrigger_5',
  spellcharges_5: 'spellcharges_5',
  spellppmrate_5: 'spellppmrate_5',
  spellcooldown_5: 'spellcooldown_5',
  spellcategory_5: 'spellcategory_5',
  spellcategorycooldown_5: 'spellcategorycooldown_5',
  bonding: 'bonding',
  page_text: 'page_text',
  page_language: 'page_language',
  page_material: 'page_material',
  start_quest: 'start_quest',
  lock_id: 'lock_id',
  material: 'material',
  sheath: 'sheath',
  random_property: 'random_property',
  set_id: 'set_id',
  max_durability: 'max_durability',
  area_bound: 'area_bound',
  map_bound: 'map_bound',
  duration: 'duration',
  bag_family: 'bag_family',
  disenchant_id: 'disenchant_id',
  food_type: 'food_type',
  min_money_loot: 'min_money_loot',
  max_money_loot: 'max_money_loot',
  extra_flags: 'extra_flags',
  other_team_entry: 'other_team_entry',
  script_name: 'script_name'
};

exports.Prisma.Item_transmogrify_templateScalarFieldEnum = {
  ID: 'ID',
  ItemID: 'ItemID',
  DisplayID: 'DisplayID',
  SourceID: 'SourceID'
};

exports.Prisma.Locales_areaScalarFieldEnum = {
  Entry: 'Entry',
  NameLoc1: 'NameLoc1',
  NameLoc2: 'NameLoc2',
  NameLoc3: 'NameLoc3',
  NameLoc4: 'NameLoc4',
  NameLoc5: 'NameLoc5',
  NameLoc6: 'NameLoc6',
  NameLoc7: 'NameLoc7',
  NameLoc8: 'NameLoc8'
};

exports.Prisma.Locales_broadcast_textScalarFieldEnum = {
  entry: 'entry',
  male_text_loc1: 'male_text_loc1',
  male_text_loc2: 'male_text_loc2',
  male_text_loc3: 'male_text_loc3',
  male_text_loc4: 'male_text_loc4',
  male_text_loc5: 'male_text_loc5',
  male_text_loc6: 'male_text_loc6',
  male_text_loc7: 'male_text_loc7',
  male_text_loc8: 'male_text_loc8',
  female_text_loc1: 'female_text_loc1',
  female_text_loc2: 'female_text_loc2',
  female_text_loc3: 'female_text_loc3',
  female_text_loc4: 'female_text_loc4',
  female_text_loc5: 'female_text_loc5',
  female_text_loc6: 'female_text_loc6',
  female_text_loc7: 'female_text_loc7',
  female_text_loc8: 'female_text_loc8'
};

exports.Prisma.Locales_creatureScalarFieldEnum = {
  entry: 'entry',
  name_loc1: 'name_loc1',
  name_loc2: 'name_loc2',
  name_loc3: 'name_loc3',
  name_loc4: 'name_loc4',
  name_loc5: 'name_loc5',
  name_loc6: 'name_loc6',
  name_loc7: 'name_loc7',
  name_loc8: 'name_loc8',
  subname_loc1: 'subname_loc1',
  subname_loc2: 'subname_loc2',
  subname_loc3: 'subname_loc3',
  subname_loc4: 'subname_loc4',
  subname_loc5: 'subname_loc5',
  subname_loc6: 'subname_loc6',
  subname_loc7: 'subname_loc7',
  subname_loc8: 'subname_loc8'
};

exports.Prisma.Locales_factionScalarFieldEnum = {
  entry: 'entry',
  name_loc1: 'name_loc1',
  name_loc2: 'name_loc2',
  name_loc3: 'name_loc3',
  name_loc4: 'name_loc4',
  name_loc5: 'name_loc5',
  name_loc6: 'name_loc6',
  description_loc1: 'description_loc1',
  description_loc2: 'description_loc2',
  description_loc3: 'description_loc3',
  description_loc4: 'description_loc4',
  description_loc5: 'description_loc5',
  description_loc6: 'description_loc6'
};

exports.Prisma.Locales_gameobjectScalarFieldEnum = {
  entry: 'entry',
  name_loc1: 'name_loc1',
  name_loc2: 'name_loc2',
  name_loc3: 'name_loc3',
  name_loc4: 'name_loc4',
  name_loc5: 'name_loc5',
  name_loc6: 'name_loc6',
  name_loc7: 'name_loc7',
  name_loc8: 'name_loc8'
};

exports.Prisma.Locales_gossip_menu_optionScalarFieldEnum = {
  menu_id: 'menu_id',
  id: 'id',
  option_text_loc1: 'option_text_loc1',
  option_text_loc2: 'option_text_loc2',
  option_text_loc3: 'option_text_loc3',
  option_text_loc4: 'option_text_loc4',
  option_text_loc5: 'option_text_loc5',
  option_text_loc6: 'option_text_loc6',
  option_text_loc7: 'option_text_loc7',
  option_text_loc8: 'option_text_loc8',
  box_text_loc1: 'box_text_loc1',
  box_text_loc2: 'box_text_loc2',
  box_text_loc3: 'box_text_loc3',
  box_text_loc4: 'box_text_loc4',
  box_text_loc5: 'box_text_loc5',
  box_text_loc6: 'box_text_loc6',
  box_text_loc7: 'box_text_loc7',
  box_text_loc8: 'box_text_loc8'
};

exports.Prisma.Locales_itemScalarFieldEnum = {
  entry: 'entry',
  name_loc1: 'name_loc1',
  name_loc2: 'name_loc2',
  name_loc3: 'name_loc3',
  name_loc4: 'name_loc4',
  name_loc5: 'name_loc5',
  name_loc6: 'name_loc6',
  name_loc7: 'name_loc7',
  name_loc8: 'name_loc8',
  description_loc1: 'description_loc1',
  description_loc2: 'description_loc2',
  description_loc3: 'description_loc3',
  description_loc4: 'description_loc4',
  description_loc5: 'description_loc5',
  description_loc6: 'description_loc6',
  description_loc7: 'description_loc7',
  description_loc8: 'description_loc8'
};

exports.Prisma.Locales_page_textScalarFieldEnum = {
  entry: 'entry',
  Text_loc1: 'Text_loc1',
  Text_loc2: 'Text_loc2',
  Text_loc3: 'Text_loc3',
  Text_loc4: 'Text_loc4',
  Text_loc5: 'Text_loc5',
  Text_loc6: 'Text_loc6',
  Text_loc7: 'Text_loc7',
  Text_loc8: 'Text_loc8'
};

exports.Prisma.Locales_points_of_interestScalarFieldEnum = {
  entry: 'entry',
  icon_name_loc1: 'icon_name_loc1',
  icon_name_loc2: 'icon_name_loc2',
  icon_name_loc3: 'icon_name_loc3',
  icon_name_loc4: 'icon_name_loc4',
  icon_name_loc5: 'icon_name_loc5',
  icon_name_loc6: 'icon_name_loc6',
  icon_name_loc7: 'icon_name_loc7',
  icon_name_loc8: 'icon_name_loc8'
};

exports.Prisma.Locales_questScalarFieldEnum = {
  entry: 'entry',
  Title_loc1: 'Title_loc1',
  Title_loc2: 'Title_loc2',
  Title_loc3: 'Title_loc3',
  Title_loc4: 'Title_loc4',
  Title_loc5: 'Title_loc5',
  Title_loc6: 'Title_loc6',
  Title_loc7: 'Title_loc7',
  Title_loc8: 'Title_loc8',
  Details_loc1: 'Details_loc1',
  Details_loc2: 'Details_loc2',
  Details_loc3: 'Details_loc3',
  Details_loc4: 'Details_loc4',
  Details_loc5: 'Details_loc5',
  Details_loc6: 'Details_loc6',
  Details_loc7: 'Details_loc7',
  Details_loc8: 'Details_loc8',
  Objectives_loc1: 'Objectives_loc1',
  Objectives_loc2: 'Objectives_loc2',
  Objectives_loc3: 'Objectives_loc3',
  Objectives_loc4: 'Objectives_loc4',
  Objectives_loc5: 'Objectives_loc5',
  Objectives_loc6: 'Objectives_loc6',
  Objectives_loc7: 'Objectives_loc7',
  Objectives_loc8: 'Objectives_loc8',
  OfferRewardText_loc1: 'OfferRewardText_loc1',
  OfferRewardText_loc2: 'OfferRewardText_loc2',
  OfferRewardText_loc3: 'OfferRewardText_loc3',
  OfferRewardText_loc4: 'OfferRewardText_loc4',
  OfferRewardText_loc5: 'OfferRewardText_loc5',
  OfferRewardText_loc6: 'OfferRewardText_loc6',
  OfferRewardText_loc7: 'OfferRewardText_loc7',
  OfferRewardText_loc8: 'OfferRewardText_loc8',
  RequestItemsText_loc1: 'RequestItemsText_loc1',
  RequestItemsText_loc2: 'RequestItemsText_loc2',
  RequestItemsText_loc3: 'RequestItemsText_loc3',
  RequestItemsText_loc4: 'RequestItemsText_loc4',
  RequestItemsText_loc5: 'RequestItemsText_loc5',
  RequestItemsText_loc6: 'RequestItemsText_loc6',
  RequestItemsText_loc7: 'RequestItemsText_loc7',
  RequestItemsText_loc8: 'RequestItemsText_loc8',
  EndText_loc1: 'EndText_loc1',
  EndText_loc2: 'EndText_loc2',
  EndText_loc3: 'EndText_loc3',
  EndText_loc4: 'EndText_loc4',
  EndText_loc5: 'EndText_loc5',
  EndText_loc6: 'EndText_loc6',
  EndText_loc7: 'EndText_loc7',
  EndText_loc8: 'EndText_loc8',
  ObjectiveText1_loc1: 'ObjectiveText1_loc1',
  ObjectiveText1_loc2: 'ObjectiveText1_loc2',
  ObjectiveText1_loc3: 'ObjectiveText1_loc3',
  ObjectiveText1_loc4: 'ObjectiveText1_loc4',
  ObjectiveText1_loc5: 'ObjectiveText1_loc5',
  ObjectiveText1_loc6: 'ObjectiveText1_loc6',
  ObjectiveText1_loc7: 'ObjectiveText1_loc7',
  ObjectiveText1_loc8: 'ObjectiveText1_loc8',
  ObjectiveText2_loc1: 'ObjectiveText2_loc1',
  ObjectiveText2_loc2: 'ObjectiveText2_loc2',
  ObjectiveText2_loc3: 'ObjectiveText2_loc3',
  ObjectiveText2_loc4: 'ObjectiveText2_loc4',
  ObjectiveText2_loc5: 'ObjectiveText2_loc5',
  ObjectiveText2_loc6: 'ObjectiveText2_loc6',
  ObjectiveText2_loc7: 'ObjectiveText2_loc7',
  ObjectiveText2_loc8: 'ObjectiveText2_loc8',
  ObjectiveText3_loc1: 'ObjectiveText3_loc1',
  ObjectiveText3_loc2: 'ObjectiveText3_loc2',
  ObjectiveText3_loc3: 'ObjectiveText3_loc3',
  ObjectiveText3_loc4: 'ObjectiveText3_loc4',
  ObjectiveText3_loc5: 'ObjectiveText3_loc5',
  ObjectiveText3_loc6: 'ObjectiveText3_loc6',
  ObjectiveText3_loc7: 'ObjectiveText3_loc7',
  ObjectiveText3_loc8: 'ObjectiveText3_loc8',
  ObjectiveText4_loc1: 'ObjectiveText4_loc1',
  ObjectiveText4_loc2: 'ObjectiveText4_loc2',
  ObjectiveText4_loc3: 'ObjectiveText4_loc3',
  ObjectiveText4_loc4: 'ObjectiveText4_loc4',
  ObjectiveText4_loc5: 'ObjectiveText4_loc5',
  ObjectiveText4_loc6: 'ObjectiveText4_loc6',
  ObjectiveText4_loc7: 'ObjectiveText4_loc7',
  ObjectiveText4_loc8: 'ObjectiveText4_loc8'
};

exports.Prisma.Locales_spellScalarFieldEnum = {
  entry: 'entry',
  name_loc1: 'name_loc1',
  name_loc2: 'name_loc2',
  name_loc3: 'name_loc3',
  name_loc4: 'name_loc4',
  name_loc5: 'name_loc5',
  name_loc6: 'name_loc6',
  nameSubtext_loc1: 'nameSubtext_loc1',
  nameSubtext_loc2: 'nameSubtext_loc2',
  nameSubtext_loc3: 'nameSubtext_loc3',
  nameSubtext_loc4: 'nameSubtext_loc4',
  nameSubtext_loc5: 'nameSubtext_loc5',
  nameSubtext_loc6: 'nameSubtext_loc6',
  description_loc1: 'description_loc1',
  description_loc2: 'description_loc2',
  description_loc3: 'description_loc3',
  description_loc4: 'description_loc4',
  description_loc5: 'description_loc5',
  description_loc6: 'description_loc6',
  auraDescription_loc1: 'auraDescription_loc1',
  auraDescription_loc2: 'auraDescription_loc2',
  auraDescription_loc3: 'auraDescription_loc3',
  auraDescription_loc4: 'auraDescription_loc4',
  auraDescription_loc5: 'auraDescription_loc5',
  auraDescription_loc6: 'auraDescription_loc6'
};

exports.Prisma.Locales_taxi_nodeScalarFieldEnum = {
  entry: 'entry',
  name_loc1: 'name_loc1',
  name_loc2: 'name_loc2',
  name_loc3: 'name_loc3',
  name_loc4: 'name_loc4',
  name_loc5: 'name_loc5',
  name_loc6: 'name_loc6'
};

exports.Prisma.Mail_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.Mail_text_templateScalarFieldEnum = {
  entry: 'entry',
  content_default: 'content_default',
  content_loc1: 'content_loc1',
  content_loc2: 'content_loc2',
  content_loc3: 'content_loc3',
  content_loc4: 'content_loc4',
  content_loc5: 'content_loc5',
  content_loc6: 'content_loc6',
  content_loc7: 'content_loc7'
};

exports.Prisma.Mangos_stringScalarFieldEnum = {
  entry: 'entry',
  content_default: 'content_default',
  content_loc1: 'content_loc1',
  content_loc2: 'content_loc2',
  content_loc3: 'content_loc3',
  content_loc4: 'content_loc4',
  content_loc5: 'content_loc5',
  content_loc6: 'content_loc6',
  content_loc7: 'content_loc7',
  content_loc8: 'content_loc8'
};

exports.Prisma.Map_loot_disabledScalarFieldEnum = {
  map_id: 'map_id',
  comment: 'comment'
};

exports.Prisma.Map_templateScalarFieldEnum = {
  entry: 'entry',
  parent: 'parent',
  map_type: 'map_type',
  linked_zone: 'linked_zone',
  player_limit: 'player_limit',
  reset_delay: 'reset_delay',
  ghost_entrance_map: 'ghost_entrance_map',
  ghost_entrance_x: 'ghost_entrance_x',
  ghost_entrance_y: 'ghost_entrance_y',
  map_name: 'map_name',
  script_name: 'script_name'
};

exports.Prisma.MigrationsScalarFieldEnum = {
  Id: 'Id',
  Name: 'Name',
  Hash: 'Hash',
  AppliedAt: 'AppliedAt'
};

exports.Prisma.Mount_spellsScalarFieldEnum = {
  itemId: 'itemId',
  spellId: 'spellId'
};

exports.Prisma.Npc_gossipScalarFieldEnum = {
  npc_guid: 'npc_guid',
  textid: 'textid'
};

exports.Prisma.Npc_textScalarFieldEnum = {
  ID: 'ID',
  BroadcastTextID0: 'BroadcastTextID0',
  Probability0: 'Probability0',
  BroadcastTextID1: 'BroadcastTextID1',
  Probability1: 'Probability1',
  BroadcastTextID2: 'BroadcastTextID2',
  Probability2: 'Probability2',
  BroadcastTextID3: 'BroadcastTextID3',
  Probability3: 'Probability3',
  BroadcastTextID4: 'BroadcastTextID4',
  Probability4: 'Probability4',
  BroadcastTextID5: 'BroadcastTextID5',
  Probability5: 'Probability5',
  BroadcastTextID6: 'BroadcastTextID6',
  Probability6: 'Probability6',
  BroadcastTextID7: 'BroadcastTextID7',
  Probability7: 'Probability7'
};

exports.Prisma.Npc_trainerScalarFieldEnum = {
  entry: 'entry',
  spell: 'spell',
  spellcost: 'spellcost',
  reqskill: 'reqskill',
  reqskillvalue: 'reqskillvalue',
  reqlevel: 'reqlevel'
};

exports.Prisma.Npc_trainer_greetingScalarFieldEnum = {
  entry: 'entry',
  content_default: 'content_default',
  content_loc1: 'content_loc1',
  content_loc2: 'content_loc2',
  content_loc3: 'content_loc3',
  content_loc4: 'content_loc4',
  content_loc5: 'content_loc5',
  content_loc6: 'content_loc6',
  content_loc7: 'content_loc7',
  content_loc8: 'content_loc8'
};

exports.Prisma.Npc_trainer_templateScalarFieldEnum = {
  entry: 'entry',
  spell: 'spell',
  spellcost: 'spellcost',
  reqskill: 'reqskill',
  reqskillvalue: 'reqskillvalue',
  reqlevel: 'reqlevel'
};

exports.Prisma.Npc_vendorScalarFieldEnum = {
  entry: 'entry',
  slot: 'slot',
  item: 'item',
  maxcount: 'maxcount',
  incrtime: 'incrtime',
  itemflags: 'itemflags',
  condition_id: 'condition_id'
};

exports.Prisma.Npc_vendor_templateScalarFieldEnum = {
  entry: 'entry',
  slot: 'slot',
  item: 'item',
  maxcount: 'maxcount',
  incrtime: 'incrtime',
  itemflags: 'itemflags',
  condition_id: 'condition_id'
};

exports.Prisma.Object_scalingScalarFieldEnum = {
  fullGuid: 'fullGuid',
  scale: 'scale'
};

exports.Prisma.Page_textScalarFieldEnum = {
  entry: 'entry',
  text: 'text',
  next_page: 'next_page'
};

exports.Prisma.Pet_levelstatsScalarFieldEnum = {
  creature_entry: 'creature_entry',
  level: 'level',
  hp: 'hp',
  mana: 'mana',
  armor: 'armor',
  str: 'str',
  agi: 'agi',
  sta: 'sta',
  inte: 'inte',
  spi: 'spi'
};

exports.Prisma.Pet_name_generationScalarFieldEnum = {
  id: 'id',
  word: 'word',
  entry: 'entry',
  half: 'half'
};

exports.Prisma.Pet_spell_dataScalarFieldEnum = {
  entry: 'entry',
  spell_id1: 'spell_id1',
  spell_id2: 'spell_id2',
  spell_id3: 'spell_id3',
  spell_id4: 'spell_id4'
};

exports.Prisma.Petcreateinfo_spellScalarFieldEnum = {
  entry: 'entry',
  spell1: 'spell1',
  spell2: 'spell2',
  spell3: 'spell3',
  spell4: 'spell4'
};

exports.Prisma.Pickpocketing_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.Player_censusScalarFieldEnum = {
  id: 'id',
  alliance_players: 'alliance_players',
  horde_players: 'horde_players',
  total_players: 'total_players',
  date_time: 'date_time'
};

exports.Prisma.Player_classlevelstatsScalarFieldEnum = {
  class: 'class',
  level: 'level',
  basehp: 'basehp',
  basemana: 'basemana'
};

exports.Prisma.Player_factionchange_itemsScalarFieldEnum = {
  alliance_id: 'alliance_id',
  horde_id: 'horde_id',
  comment: 'comment'
};

exports.Prisma.Player_factionchange_mountsScalarFieldEnum = {
  RaceId: 'RaceId',
  MountNum: 'MountNum',
  ItemEntry: 'ItemEntry',
  Comment: 'Comment'
};

exports.Prisma.Player_factionchange_questsScalarFieldEnum = {
  alliance_id: 'alliance_id',
  horde_id: 'horde_id',
  comment: 'comment'
};

exports.Prisma.Player_factionchange_reputationsScalarFieldEnum = {
  alliance_id: 'alliance_id',
  horde_id: 'horde_id'
};

exports.Prisma.Player_factionchange_spellsScalarFieldEnum = {
  alliance_id: 'alliance_id',
  horde_id: 'horde_id',
  comment: 'comment'
};

exports.Prisma.Player_levelstatsScalarFieldEnum = {
  race: 'race',
  class: 'class',
  level: 'level',
  str: 'str',
  agi: 'agi',
  sta: 'sta',
  inte: 'inte',
  spi: 'spi'
};

exports.Prisma.Player_xp_for_levelScalarFieldEnum = {
  lvl: 'lvl',
  xp_for_next_level: 'xp_for_next_level'
};

exports.Prisma.PlayerbotScalarFieldEnum = {
  char_guid: 'char_guid',
  chance: 'chance',
  comment: 'comment'
};

exports.Prisma.PlayercreateinfoScalarFieldEnum = {
  race: 'race',
  class: 'class',
  map: 'map',
  zone: 'zone',
  position_x: 'position_x',
  position_y: 'position_y',
  position_z: 'position_z',
  orientation: 'orientation'
};

exports.Prisma.Playercreateinfo_actionScalarFieldEnum = {
  race: 'race',
  class: 'class',
  button: 'button',
  action: 'action',
  type: 'type'
};

exports.Prisma.Playercreateinfo_spellScalarFieldEnum = {
  race: 'race',
  class: 'class',
  spell: 'spell',
  note: 'note'
};

exports.Prisma.Points_of_interestScalarFieldEnum = {
  entry: 'entry',
  x: 'x',
  y: 'y',
  icon: 'icon',
  flags: 'flags',
  data: 'data',
  icon_name: 'icon_name'
};

exports.Prisma.Pool_creatureScalarFieldEnum = {
  guid: 'guid',
  pool_entry: 'pool_entry',
  chance: 'chance',
  description: 'description',
  flags: 'flags'
};

exports.Prisma.Pool_creature_templateScalarFieldEnum = {
  id: 'id',
  pool_entry: 'pool_entry',
  chance: 'chance',
  description: 'description',
  flags: 'flags'
};

exports.Prisma.Pool_gameobjectScalarFieldEnum = {
  guid: 'guid',
  pool_entry: 'pool_entry',
  chance: 'chance',
  description: 'description',
  flags: 'flags'
};

exports.Prisma.Pool_gameobject_templateScalarFieldEnum = {
  id: 'id',
  pool_entry: 'pool_entry',
  chance: 'chance',
  description: 'description',
  flags: 'flags'
};

exports.Prisma.Pool_poolScalarFieldEnum = {
  pool_id: 'pool_id',
  mother_pool: 'mother_pool',
  chance: 'chance',
  description: 'description',
  flags: 'flags'
};

exports.Prisma.Pool_templateScalarFieldEnum = {
  entry: 'entry',
  max_limit: 'max_limit',
  description: 'description',
  flags: 'flags',
  instance: 'instance'
};

exports.Prisma.Quest_greetingScalarFieldEnum = {
  entry: 'entry',
  type: 'type',
  content_default: 'content_default',
  content_loc1: 'content_loc1',
  content_loc2: 'content_loc2',
  content_loc3: 'content_loc3',
  content_loc4: 'content_loc4',
  content_loc5: 'content_loc5',
  content_loc6: 'content_loc6',
  content_loc7: 'content_loc7',
  content_loc8: 'content_loc8',
  emote_id: 'emote_id',
  emote_delay: 'emote_delay'
};

exports.Prisma.Quest_templateScalarFieldEnum = {
  entry: 'entry',
  Method: 'Method',
  ZoneOrSort: 'ZoneOrSort',
  MinLevel: 'MinLevel',
  MaxLevel: 'MaxLevel',
  QuestLevel: 'QuestLevel',
  Type: 'Type',
  RequiredClasses: 'RequiredClasses',
  RequiredRaces: 'RequiredRaces',
  RequiredSkill: 'RequiredSkill',
  RequiredSkillValue: 'RequiredSkillValue',
  RepObjectiveFaction: 'RepObjectiveFaction',
  RepObjectiveValue: 'RepObjectiveValue',
  RequiredMinRepFaction: 'RequiredMinRepFaction',
  RequiredMinRepValue: 'RequiredMinRepValue',
  RequiredMaxRepFaction: 'RequiredMaxRepFaction',
  RequiredMaxRepValue: 'RequiredMaxRepValue',
  SuggestedPlayers: 'SuggestedPlayers',
  LimitTime: 'LimitTime',
  QuestFlags: 'QuestFlags',
  SpecialFlags: 'SpecialFlags',
  PrevQuestId: 'PrevQuestId',
  NextQuestId: 'NextQuestId',
  ExclusiveGroup: 'ExclusiveGroup',
  NextQuestInChain: 'NextQuestInChain',
  SrcItemId: 'SrcItemId',
  SrcItemCount: 'SrcItemCount',
  SrcSpell: 'SrcSpell',
  Title: 'Title',
  Details: 'Details',
  Objectives: 'Objectives',
  OfferRewardText: 'OfferRewardText',
  RequestItemsText: 'RequestItemsText',
  EndText: 'EndText',
  ObjectiveText1: 'ObjectiveText1',
  ObjectiveText2: 'ObjectiveText2',
  ObjectiveText3: 'ObjectiveText3',
  ObjectiveText4: 'ObjectiveText4',
  ReqItemId1: 'ReqItemId1',
  ReqItemId2: 'ReqItemId2',
  ReqItemId3: 'ReqItemId3',
  ReqItemId4: 'ReqItemId4',
  ReqItemCount1: 'ReqItemCount1',
  ReqItemCount2: 'ReqItemCount2',
  ReqItemCount3: 'ReqItemCount3',
  ReqItemCount4: 'ReqItemCount4',
  ReqSourceId1: 'ReqSourceId1',
  ReqSourceId2: 'ReqSourceId2',
  ReqSourceId3: 'ReqSourceId3',
  ReqSourceId4: 'ReqSourceId4',
  ReqSourceCount1: 'ReqSourceCount1',
  ReqSourceCount2: 'ReqSourceCount2',
  ReqSourceCount3: 'ReqSourceCount3',
  ReqSourceCount4: 'ReqSourceCount4',
  ReqCreatureOrGOId1: 'ReqCreatureOrGOId1',
  ReqCreatureOrGOId2: 'ReqCreatureOrGOId2',
  ReqCreatureOrGOId3: 'ReqCreatureOrGOId3',
  ReqCreatureOrGOId4: 'ReqCreatureOrGOId4',
  ReqCreatureOrGOCount1: 'ReqCreatureOrGOCount1',
  ReqCreatureOrGOCount2: 'ReqCreatureOrGOCount2',
  ReqCreatureOrGOCount3: 'ReqCreatureOrGOCount3',
  ReqCreatureOrGOCount4: 'ReqCreatureOrGOCount4',
  ReqSpellCast1: 'ReqSpellCast1',
  ReqSpellCast2: 'ReqSpellCast2',
  ReqSpellCast3: 'ReqSpellCast3',
  ReqSpellCast4: 'ReqSpellCast4',
  RewChoiceItemId1: 'RewChoiceItemId1',
  RewChoiceItemId2: 'RewChoiceItemId2',
  RewChoiceItemId3: 'RewChoiceItemId3',
  RewChoiceItemId4: 'RewChoiceItemId4',
  RewChoiceItemId5: 'RewChoiceItemId5',
  RewChoiceItemId6: 'RewChoiceItemId6',
  RewChoiceItemCount1: 'RewChoiceItemCount1',
  RewChoiceItemCount2: 'RewChoiceItemCount2',
  RewChoiceItemCount3: 'RewChoiceItemCount3',
  RewChoiceItemCount4: 'RewChoiceItemCount4',
  RewChoiceItemCount5: 'RewChoiceItemCount5',
  RewChoiceItemCount6: 'RewChoiceItemCount6',
  RewItemId1: 'RewItemId1',
  RewItemId2: 'RewItemId2',
  RewItemId3: 'RewItemId3',
  RewItemId4: 'RewItemId4',
  RewItemCount1: 'RewItemCount1',
  RewItemCount2: 'RewItemCount2',
  RewItemCount3: 'RewItemCount3',
  RewItemCount4: 'RewItemCount4',
  RewRepFaction1: 'RewRepFaction1',
  RewRepFaction2: 'RewRepFaction2',
  RewRepFaction3: 'RewRepFaction3',
  RewRepFaction4: 'RewRepFaction4',
  RewRepFaction5: 'RewRepFaction5',
  RewRepValue1: 'RewRepValue1',
  RewRepValue2: 'RewRepValue2',
  RewRepValue3: 'RewRepValue3',
  RewRepValue4: 'RewRepValue4',
  RewRepValue5: 'RewRepValue5',
  RewXP: 'RewXP',
  RewOrReqMoney: 'RewOrReqMoney',
  RewMoneyMaxLevel: 'RewMoneyMaxLevel',
  RewSpell: 'RewSpell',
  RewSpellCast: 'RewSpellCast',
  RewMailTemplateId: 'RewMailTemplateId',
  RewMailDelaySecs: 'RewMailDelaySecs',
  RewMailMoney: 'RewMailMoney',
  PointMapId: 'PointMapId',
  PointX: 'PointX',
  PointY: 'PointY',
  PointOpt: 'PointOpt',
  DetailsEmote1: 'DetailsEmote1',
  DetailsEmote2: 'DetailsEmote2',
  DetailsEmote3: 'DetailsEmote3',
  DetailsEmote4: 'DetailsEmote4',
  DetailsEmoteDelay1: 'DetailsEmoteDelay1',
  DetailsEmoteDelay2: 'DetailsEmoteDelay2',
  DetailsEmoteDelay3: 'DetailsEmoteDelay3',
  DetailsEmoteDelay4: 'DetailsEmoteDelay4',
  IncompleteEmote: 'IncompleteEmote',
  CompleteEmote: 'CompleteEmote',
  OfferRewardEmote1: 'OfferRewardEmote1',
  OfferRewardEmote2: 'OfferRewardEmote2',
  OfferRewardEmote3: 'OfferRewardEmote3',
  OfferRewardEmote4: 'OfferRewardEmote4',
  OfferRewardEmoteDelay1: 'OfferRewardEmoteDelay1',
  OfferRewardEmoteDelay2: 'OfferRewardEmoteDelay2',
  OfferRewardEmoteDelay3: 'OfferRewardEmoteDelay3',
  OfferRewardEmoteDelay4: 'OfferRewardEmoteDelay4',
  StartScript: 'StartScript',
  CompleteScript: 'CompleteScript'
};

exports.Prisma.Reference_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.Reputation_reward_rateScalarFieldEnum = {
  faction: 'faction',
  quest_rate: 'quest_rate',
  creature_rate: 'creature_rate',
  spell_rate: 'spell_rate'
};

exports.Prisma.Reputation_spillover_templateScalarFieldEnum = {
  faction: 'faction',
  faction1: 'faction1',
  rate_1: 'rate_1',
  rank_1: 'rank_1',
  faction2: 'faction2',
  rate_2: 'rate_2',
  rank_2: 'rank_2',
  faction3: 'faction3',
  rate_3: 'rate_3',
  rank_3: 'rank_3',
  faction4: 'faction4',
  rate_4: 'rate_4',
  rank_4: 'rank_4'
};

exports.Prisma.Reserved_nameScalarFieldEnum = {
  name: 'name'
};

exports.Prisma.Script_textsScalarFieldEnum = {
  entry: 'entry',
  content_default: 'content_default',
  content_loc1: 'content_loc1',
  content_loc2: 'content_loc2',
  content_loc3: 'content_loc3',
  content_loc4: 'content_loc4',
  content_loc5: 'content_loc5',
  content_loc6: 'content_loc6',
  content_loc7: 'content_loc7',
  content_loc8: 'content_loc8',
  sound: 'sound',
  type: 'type',
  language: 'language',
  emote: 'emote',
  comment: 'comment'
};

exports.Prisma.Script_waypointScalarFieldEnum = {
  entry: 'entry',
  pointid: 'pointid',
  location_x: 'location_x',
  location_y: 'location_y',
  location_z: 'location_z',
  waittime: 'waittime',
  point_comment: 'point_comment'
};

exports.Prisma.Scripted_areatriggerScalarFieldEnum = {
  entry: 'entry',
  script_name: 'script_name'
};

exports.Prisma.Scripted_event_idScalarFieldEnum = {
  id: 'id',
  script_name: 'script_name'
};

exports.Prisma.Shop_categoriesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  icon: 'icon'
};

exports.Prisma.Shop_itemsScalarFieldEnum = {
  id: 'id',
  category: 'category',
  item: 'item',
  description: 'description',
  price: 'price',
  descriptionLong: 'descriptionLong'
};

exports.Prisma.Skill_fishing_base_levelScalarFieldEnum = {
  entry: 'entry',
  skill: 'skill'
};

exports.Prisma.Skill_line_abilityScalarFieldEnum = {
  id: 'id',
  skill_id: 'skill_id',
  spell_id: 'spell_id',
  race_mask: 'race_mask',
  class_mask: 'class_mask',
  req_skill_value: 'req_skill_value',
  superseded_by_spell: 'superseded_by_spell',
  learn_on_get_skill: 'learn_on_get_skill',
  max_value: 'max_value',
  min_value: 'min_value',
  req_train_points: 'req_train_points'
};

exports.Prisma.Skinning_loot_templateScalarFieldEnum = {
  entry: 'entry',
  item: 'item',
  ChanceOrQuestChance: 'ChanceOrQuestChance',
  groupid: 'groupid',
  mincountOrRef: 'mincountOrRef',
  maxcount: 'maxcount',
  condition_id: 'condition_id'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.Sound_entriesScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.Spell_affectScalarFieldEnum = {
  entry: 'entry',
  effectId: 'effectId',
  SpellFamilyMask: 'SpellFamilyMask'
};

exports.Prisma.Spell_areaScalarFieldEnum = {
  spell: 'spell',
  area: 'area',
  quest_start: 'quest_start',
  quest_start_active: 'quest_start_active',
  quest_end: 'quest_end',
  aura_spell: 'aura_spell',
  racemask: 'racemask',
  gender: 'gender',
  autocast: 'autocast'
};

exports.Prisma.Spell_chainScalarFieldEnum = {
  spell_id: 'spell_id',
  prev_spell: 'prev_spell',
  first_spell: 'first_spell',
  rank: 'rank',
  req_spell: 'req_spell'
};

exports.Prisma.Spell_checkScalarFieldEnum = {
  spellid: 'spellid',
  SpellFamilyName: 'SpellFamilyName',
  SpellFamilyMask: 'SpellFamilyMask',
  SpellIcon: 'SpellIcon',
  SpellVisual: 'SpellVisual',
  SpellCategory: 'SpellCategory',
  EffectType: 'EffectType',
  EffectAura: 'EffectAura',
  EffectIdx: 'EffectIdx',
  Name: 'Name',
  Code: 'Code'
};

exports.Prisma.Spell_disabledScalarFieldEnum = {
  entry: 'entry'
};

exports.Prisma.Spell_effect_modScalarFieldEnum = {
  Id: 'Id',
  EffectIndex: 'EffectIndex',
  Effect: 'Effect',
  EffectDieSides: 'EffectDieSides',
  EffectBaseDice: 'EffectBaseDice',
  EffectDicePerLevel: 'EffectDicePerLevel',
  EffectRealPointsPerLevel: 'EffectRealPointsPerLevel',
  EffectBasePoints: 'EffectBasePoints',
  EffectAmplitude: 'EffectAmplitude',
  EffectPointsPerComboPoint: 'EffectPointsPerComboPoint',
  EffectChainTarget: 'EffectChainTarget',
  EffectMultipleValue: 'EffectMultipleValue',
  EffectMechanic: 'EffectMechanic',
  EffectImplicitTargetA: 'EffectImplicitTargetA',
  EffectImplicitTargetB: 'EffectImplicitTargetB',
  EffectRadiusIndex: 'EffectRadiusIndex',
  EffectApplyAuraName: 'EffectApplyAuraName',
  EffectItemType: 'EffectItemType',
  EffectMiscValue: 'EffectMiscValue',
  EffectTriggerSpell: 'EffectTriggerSpell',
  Comment: 'Comment'
};

exports.Prisma.Spell_elixirScalarFieldEnum = {
  entry: 'entry',
  mask: 'mask'
};

exports.Prisma.Spell_enchant_chargesScalarFieldEnum = {
  entry: 'entry',
  charges: 'charges'
};

exports.Prisma.Spell_groupScalarFieldEnum = {
  group_id: 'group_id',
  group_spell_id: 'group_spell_id',
  spell_id: 'spell_id'
};

exports.Prisma.Spell_group_stack_rulesScalarFieldEnum = {
  group_id: 'group_id',
  stack_rule: 'stack_rule'
};

exports.Prisma.Spell_learn_spellScalarFieldEnum = {
  entry: 'entry',
  SpellID: 'SpellID',
  Active: 'Active'
};

exports.Prisma.Spell_modScalarFieldEnum = {
  Id: 'Id',
  procChance: 'procChance',
  procFlags: 'procFlags',
  procCharges: 'procCharges',
  DurationIndex: 'DurationIndex',
  Category: 'Category',
  CastingTimeIndex: 'CastingTimeIndex',
  StackAmount: 'StackAmount',
  SpellIconID: 'SpellIconID',
  activeIconID: 'activeIconID',
  manaCost: 'manaCost',
  Attributes: 'Attributes',
  AttributesEx: 'AttributesEx',
  AttributesEx2: 'AttributesEx2',
  AttributesEx3: 'AttributesEx3',
  AttributesEx4: 'AttributesEx4',
  Custom: 'Custom',
  InterruptFlags: 'InterruptFlags',
  AuraInterruptFlags: 'AuraInterruptFlags',
  ChannelInterruptFlags: 'ChannelInterruptFlags',
  Dispel: 'Dispel',
  Stances: 'Stances',
  StancesNot: 'StancesNot',
  SpellVisual: 'SpellVisual',
  ManaCostPercentage: 'ManaCostPercentage',
  StartRecoveryCategory: 'StartRecoveryCategory',
  StartRecoveryTime: 'StartRecoveryTime',
  MaxAffectedTargets: 'MaxAffectedTargets',
  MaxTargetLevel: 'MaxTargetLevel',
  DmgClass: 'DmgClass',
  rangeIndex: 'rangeIndex',
  RecoveryTime: 'RecoveryTime',
  CategoryRecoveryTime: 'CategoryRecoveryTime',
  SpellFamilyName: 'SpellFamilyName',
  SpellFamilyFlags: 'SpellFamilyFlags',
  Mechanic: 'Mechanic',
  EquippedItemClass: 'EquippedItemClass',
  Comment: 'Comment'
};

exports.Prisma.Spell_pet_aurasScalarFieldEnum = {
  spell: 'spell',
  pet: 'pet',
  aura: 'aura'
};

exports.Prisma.Spell_proc_eventScalarFieldEnum = {
  entry: 'entry',
  SchoolMask: 'SchoolMask',
  SpellFamilyName: 'SpellFamilyName',
  SpellFamilyMask0: 'SpellFamilyMask0',
  SpellFamilyMask1: 'SpellFamilyMask1',
  SpellFamilyMask2: 'SpellFamilyMask2',
  procFlags: 'procFlags',
  procEx: 'procEx',
  ppmRate: 'ppmRate',
  CustomChance: 'CustomChance',
  Cooldown: 'Cooldown'
};

exports.Prisma.Spell_proc_item_enchantScalarFieldEnum = {
  entry: 'entry',
  ppmRate: 'ppmRate'
};

exports.Prisma.Spell_script_targetScalarFieldEnum = {
  entry: 'entry',
  type: 'type',
  targetEntry: 'targetEntry',
  conditionId: 'conditionId',
  inverseEffectMask: 'inverseEffectMask'
};

exports.Prisma.Spell_target_positionScalarFieldEnum = {
  id: 'id',
  target_map: 'target_map',
  target_position_x: 'target_position_x',
  target_position_y: 'target_position_y',
  target_position_z: 'target_position_z',
  target_orientation: 'target_orientation'
};

exports.Prisma.Spell_templateScalarFieldEnum = {
  entry: 'entry',
  school: 'school',
  category: 'category',
  castUI: 'castUI',
  dispel: 'dispel',
  mechanic: 'mechanic',
  attributes: 'attributes',
  attributesEx: 'attributesEx',
  attributesEx2: 'attributesEx2',
  attributesEx3: 'attributesEx3',
  attributesEx4: 'attributesEx4',
  stances: 'stances',
  stancesNot: 'stancesNot',
  targets: 'targets',
  targetCreatureType: 'targetCreatureType',
  requiresSpellFocus: 'requiresSpellFocus',
  casterAuraState: 'casterAuraState',
  targetAuraState: 'targetAuraState',
  castingTimeIndex: 'castingTimeIndex',
  recoveryTime: 'recoveryTime',
  categoryRecoveryTime: 'categoryRecoveryTime',
  interruptFlags: 'interruptFlags',
  auraInterruptFlags: 'auraInterruptFlags',
  channelInterruptFlags: 'channelInterruptFlags',
  procFlags: 'procFlags',
  procChance: 'procChance',
  procCharges: 'procCharges',
  maxLevel: 'maxLevel',
  baseLevel: 'baseLevel',
  spellLevel: 'spellLevel',
  durationIndex: 'durationIndex',
  powerType: 'powerType',
  manaCost: 'manaCost',
  manCostPerLevel: 'manCostPerLevel',
  manaPerSecond: 'manaPerSecond',
  manaPerSecondPerLevel: 'manaPerSecondPerLevel',
  rangeIndex: 'rangeIndex',
  speed: 'speed',
  modelNextSpell: 'modelNextSpell',
  stackAmount: 'stackAmount',
  totem1: 'totem1',
  totem2: 'totem2',
  reagent1: 'reagent1',
  reagent2: 'reagent2',
  reagent3: 'reagent3',
  reagent4: 'reagent4',
  reagent5: 'reagent5',
  reagent6: 'reagent6',
  reagent7: 'reagent7',
  reagent8: 'reagent8',
  reagentCount1: 'reagentCount1',
  reagentCount2: 'reagentCount2',
  reagentCount3: 'reagentCount3',
  reagentCount4: 'reagentCount4',
  reagentCount5: 'reagentCount5',
  reagentCount6: 'reagentCount6',
  reagentCount7: 'reagentCount7',
  reagentCount8: 'reagentCount8',
  equippedItemClass: 'equippedItemClass',
  equippedItemSubClassMask: 'equippedItemSubClassMask',
  equippedItemInventoryTypeMask: 'equippedItemInventoryTypeMask',
  effect1: 'effect1',
  effect2: 'effect2',
  effect3: 'effect3',
  effectDieSides1: 'effectDieSides1',
  effectDieSides2: 'effectDieSides2',
  effectDieSides3: 'effectDieSides3',
  effectBaseDice1: 'effectBaseDice1',
  effectBaseDice2: 'effectBaseDice2',
  effectBaseDice3: 'effectBaseDice3',
  effectDicePerLevel1: 'effectDicePerLevel1',
  effectDicePerLevel2: 'effectDicePerLevel2',
  effectDicePerLevel3: 'effectDicePerLevel3',
  effectRealPointsPerLevel1: 'effectRealPointsPerLevel1',
  effectRealPointsPerLevel2: 'effectRealPointsPerLevel2',
  effectRealPointsPerLevel3: 'effectRealPointsPerLevel3',
  effectBasePoints1: 'effectBasePoints1',
  effectBasePoints2: 'effectBasePoints2',
  effectBasePoints3: 'effectBasePoints3',
  effectBonusCoefficient1: 'effectBonusCoefficient1',
  effectBonusCoefficient2: 'effectBonusCoefficient2',
  effectBonusCoefficient3: 'effectBonusCoefficient3',
  effectMechanic1: 'effectMechanic1',
  effectMechanic2: 'effectMechanic2',
  effectMechanic3: 'effectMechanic3',
  effectImplicitTargetA1: 'effectImplicitTargetA1',
  effectImplicitTargetA2: 'effectImplicitTargetA2',
  effectImplicitTargetA3: 'effectImplicitTargetA3',
  effectImplicitTargetB1: 'effectImplicitTargetB1',
  effectImplicitTargetB2: 'effectImplicitTargetB2',
  effectImplicitTargetB3: 'effectImplicitTargetB3',
  effectRadiusIndex1: 'effectRadiusIndex1',
  effectRadiusIndex2: 'effectRadiusIndex2',
  effectRadiusIndex3: 'effectRadiusIndex3',
  effectApplyAuraName1: 'effectApplyAuraName1',
  effectApplyAuraName2: 'effectApplyAuraName2',
  effectApplyAuraName3: 'effectApplyAuraName3',
  effectAmplitude1: 'effectAmplitude1',
  effectAmplitude2: 'effectAmplitude2',
  effectAmplitude3: 'effectAmplitude3',
  effectMultipleValue1: 'effectMultipleValue1',
  effectMultipleValue2: 'effectMultipleValue2',
  effectMultipleValue3: 'effectMultipleValue3',
  effectChainTarget1: 'effectChainTarget1',
  effectChainTarget2: 'effectChainTarget2',
  effectChainTarget3: 'effectChainTarget3',
  effectItemType1: 'effectItemType1',
  effectItemType2: 'effectItemType2',
  effectItemType3: 'effectItemType3',
  effectMiscValue1: 'effectMiscValue1',
  effectMiscValue2: 'effectMiscValue2',
  effectMiscValue3: 'effectMiscValue3',
  effectTriggerSpell1: 'effectTriggerSpell1',
  effectTriggerSpell2: 'effectTriggerSpell2',
  effectTriggerSpell3: 'effectTriggerSpell3',
  effectPointsPerComboPoint1: 'effectPointsPerComboPoint1',
  effectPointsPerComboPoint2: 'effectPointsPerComboPoint2',
  effectPointsPerComboPoint3: 'effectPointsPerComboPoint3',
  spellVisual1: 'spellVisual1',
  spellVisual2: 'spellVisual2',
  spellIconId: 'spellIconId',
  activeIconId: 'activeIconId',
  spellPriority: 'spellPriority',
  name: 'name',
  nameFlags: 'nameFlags',
  nameSubtext: 'nameSubtext',
  nameSubtextFlags: 'nameSubtextFlags',
  description: 'description',
  descriptionFlags: 'descriptionFlags',
  auraDescription: 'auraDescription',
  auraDescriptionFlags: 'auraDescriptionFlags',
  manaCostPercentage: 'manaCostPercentage',
  startRecoveryCategory: 'startRecoveryCategory',
  startRecoveryTime: 'startRecoveryTime',
  minTargetLevel: 'minTargetLevel',
  maxTargetLevel: 'maxTargetLevel',
  spellFamilyName: 'spellFamilyName',
  spellFamilyFlags: 'spellFamilyFlags',
  maxAffectedTargets: 'maxAffectedTargets',
  dmgClass: 'dmgClass',
  preventionType: 'preventionType',
  stanceBarOrder: 'stanceBarOrder',
  dmgMultiplier1: 'dmgMultiplier1',
  dmgMultiplier2: 'dmgMultiplier2',
  dmgMultiplier3: 'dmgMultiplier3',
  minFactionId: 'minFactionId',
  minReputation: 'minReputation',
  requiredAuraVision: 'requiredAuraVision',
  customFlags: 'customFlags'
};

exports.Prisma.Spell_threatScalarFieldEnum = {
  entry: 'entry',
  Threat: 'Threat',
  multiplier: 'multiplier',
  ap_bonus: 'ap_bonus'
};

exports.Prisma.Taxi_nodesScalarFieldEnum = {
  id: 'id',
  map_id: 'map_id',
  x: 'x',
  y: 'y',
  z: 'z',
  name: 'name',
  mount_creature_id1: 'mount_creature_id1',
  mount_creature_id2: 'mount_creature_id2'
};

exports.Prisma.Taxi_path_transitionsScalarFieldEnum = {
  in_path: 'in_path',
  out_path: 'out_path',
  in_node: 'in_node',
  out_node: 'out_node',
  comment: 'comment'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TransportsScalarFieldEnum = {
  guid: 'guid',
  entry: 'entry',
  name: 'name',
  period: 'period'
};

exports.Prisma.VariablesScalarFieldEnum = {
  index: 'index',
  value: 'value'
};

exports.Prisma.Warden_checksScalarFieldEnum = {
  id: 'id',
  group_id: 'group_id',
  type: 'type',
  data: 'data',
  str: 'str',
  address: 'address',
  length: 'length',
  result: 'result',
  penalty: 'penalty',
  comment: 'comment'
};

exports.Prisma.Warden_scansScalarFieldEnum = {
  id: 'id',
  type: 'type',
  str: 'str',
  data: 'data',
  address: 'address',
  length: 'length',
  result: 'result',
  flags: 'flags',
  comment: 'comment'
};

exports.Prisma.World_safe_locs_facingScalarFieldEnum = {
  id: 'id',
  orientation: 'orientation'
};


exports.Prisma.ModelName = {
  area_template: 'area_template',
  areatrigger_bg_entrance: 'areatrigger_bg_entrance',
  areatrigger_involvedrelation: 'areatrigger_involvedrelation',
  areatrigger_tavern: 'areatrigger_tavern',
  areatrigger_teleport: 'areatrigger_teleport',
  areatrigger_template: 'areatrigger_template',
  battleground_events: 'battleground_events',
  battleground_template: 'battleground_template',
  battlemaster_entry: 'battlemaster_entry',
  broadcast_text: 'broadcast_text',
  cinematic_waypoints: 'cinematic_waypoints',
  companion_spells: 'companion_spells',
  conditions: 'conditions',
  creature: 'creature',
  creature_addon: 'creature_addon',
  creature_ai_events: 'creature_ai_events',
  creature_battleground: 'creature_battleground',
  creature_display_info_addon: 'creature_display_info_addon',
  creature_equip_template: 'creature_equip_template',
  creature_groups: 'creature_groups',
  creature_involvedrelation: 'creature_involvedrelation',
  creature_linking: 'creature_linking',
  creature_linking_template: 'creature_linking_template',
  creature_loot_template: 'creature_loot_template',
  creature_movement: 'creature_movement',
  creature_movement_special: 'creature_movement_special',
  creature_movement_template: 'creature_movement_template',
  creature_onkill_reputation: 'creature_onkill_reputation',
  creature_questrelation: 'creature_questrelation',
  creature_spells: 'creature_spells',
  creature_template: 'creature_template',
  custom_character_skins: 'custom_character_skins',
  custom_graveyards: 'custom_graveyards',
  disenchant_loot_template: 'disenchant_loot_template',
  exploration_basexp: 'exploration_basexp',
  faction: 'faction',
  faction_template: 'faction_template',
  fishing_loot_template: 'fishing_loot_template',
  game_event: 'game_event',
  game_event_creature: 'game_event_creature',
  game_event_creature_data: 'game_event_creature_data',
  game_event_gameobject: 'game_event_gameobject',
  game_event_mail: 'game_event_mail',
  game_event_quest: 'game_event_quest',
  game_graveyard_zone: 'game_graveyard_zone',
  game_tele: 'game_tele',
  game_weather: 'game_weather',
  gameobject: 'gameobject',
  gameobject_battleground: 'gameobject_battleground',
  gameobject_display_info_addon: 'gameobject_display_info_addon',
  gameobject_involvedrelation: 'gameobject_involvedrelation',
  gameobject_loot_template: 'gameobject_loot_template',
  gameobject_questrelation: 'gameobject_questrelation',
  gameobject_requirement: 'gameobject_requirement',
  gameobject_template: 'gameobject_template',
  gm_subsurveys: 'gm_subsurveys',
  gm_surveys: 'gm_surveys',
  gm_tickets: 'gm_tickets',
  gossip_menu: 'gossip_menu',
  gossip_menu_option: 'gossip_menu_option',
  guild_bank: 'guild_bank',
  guild_bank_log: 'guild_bank_log',
  guild_bank_money: 'guild_bank_money',
  guild_bank_tabs: 'guild_bank_tabs',
  instance_buff_removal: 'instance_buff_removal',
  item_enchantment_template: 'item_enchantment_template',
  item_loot_template: 'item_loot_template',
  item_required_target: 'item_required_target',
  item_template: 'item_template',
  item_transmogrify_template: 'item_transmogrify_template',
  locales_area: 'locales_area',
  locales_broadcast_text: 'locales_broadcast_text',
  locales_creature: 'locales_creature',
  locales_faction: 'locales_faction',
  locales_gameobject: 'locales_gameobject',
  locales_gossip_menu_option: 'locales_gossip_menu_option',
  locales_item: 'locales_item',
  locales_page_text: 'locales_page_text',
  locales_points_of_interest: 'locales_points_of_interest',
  locales_quest: 'locales_quest',
  locales_spell: 'locales_spell',
  locales_taxi_node: 'locales_taxi_node',
  mail_loot_template: 'mail_loot_template',
  mail_text_template: 'mail_text_template',
  mangos_string: 'mangos_string',
  map_loot_disabled: 'map_loot_disabled',
  map_template: 'map_template',
  migrations: 'migrations',
  mount_spells: 'mount_spells',
  npc_gossip: 'npc_gossip',
  npc_text: 'npc_text',
  npc_trainer: 'npc_trainer',
  npc_trainer_greeting: 'npc_trainer_greeting',
  npc_trainer_template: 'npc_trainer_template',
  npc_vendor: 'npc_vendor',
  npc_vendor_template: 'npc_vendor_template',
  object_scaling: 'object_scaling',
  page_text: 'page_text',
  pet_levelstats: 'pet_levelstats',
  pet_name_generation: 'pet_name_generation',
  pet_spell_data: 'pet_spell_data',
  petcreateinfo_spell: 'petcreateinfo_spell',
  pickpocketing_loot_template: 'pickpocketing_loot_template',
  player_census: 'player_census',
  player_classlevelstats: 'player_classlevelstats',
  player_factionchange_items: 'player_factionchange_items',
  player_factionchange_mounts: 'player_factionchange_mounts',
  player_factionchange_quests: 'player_factionchange_quests',
  player_factionchange_reputations: 'player_factionchange_reputations',
  player_factionchange_spells: 'player_factionchange_spells',
  player_levelstats: 'player_levelstats',
  player_xp_for_level: 'player_xp_for_level',
  playerbot: 'playerbot',
  playercreateinfo: 'playercreateinfo',
  playercreateinfo_action: 'playercreateinfo_action',
  playercreateinfo_spell: 'playercreateinfo_spell',
  points_of_interest: 'points_of_interest',
  pool_creature: 'pool_creature',
  pool_creature_template: 'pool_creature_template',
  pool_gameobject: 'pool_gameobject',
  pool_gameobject_template: 'pool_gameobject_template',
  pool_pool: 'pool_pool',
  pool_template: 'pool_template',
  quest_greeting: 'quest_greeting',
  quest_template: 'quest_template',
  reference_loot_template: 'reference_loot_template',
  reputation_reward_rate: 'reputation_reward_rate',
  reputation_spillover_template: 'reputation_spillover_template',
  reserved_name: 'reserved_name',
  script_texts: 'script_texts',
  script_waypoint: 'script_waypoint',
  scripted_areatrigger: 'scripted_areatrigger',
  scripted_event_id: 'scripted_event_id',
  shop_categories: 'shop_categories',
  shop_items: 'shop_items',
  skill_fishing_base_level: 'skill_fishing_base_level',
  skill_line_ability: 'skill_line_ability',
  skinning_loot_template: 'skinning_loot_template',
  sound_entries: 'sound_entries',
  spell_affect: 'spell_affect',
  spell_area: 'spell_area',
  spell_chain: 'spell_chain',
  spell_check: 'spell_check',
  spell_disabled: 'spell_disabled',
  spell_effect_mod: 'spell_effect_mod',
  spell_elixir: 'spell_elixir',
  spell_enchant_charges: 'spell_enchant_charges',
  spell_group: 'spell_group',
  spell_group_stack_rules: 'spell_group_stack_rules',
  spell_learn_spell: 'spell_learn_spell',
  spell_mod: 'spell_mod',
  spell_pet_auras: 'spell_pet_auras',
  spell_proc_event: 'spell_proc_event',
  spell_proc_item_enchant: 'spell_proc_item_enchant',
  spell_script_target: 'spell_script_target',
  spell_target_position: 'spell_target_position',
  spell_template: 'spell_template',
  spell_threat: 'spell_threat',
  taxi_nodes: 'taxi_nodes',
  taxi_path_transitions: 'taxi_path_transitions',
  transports: 'transports',
  variables: 'variables',
  warden_checks: 'warden_checks',
  warden_scans: 'warden_scans',
  world_safe_locs_facing: 'world_safe_locs_facing'
};

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
