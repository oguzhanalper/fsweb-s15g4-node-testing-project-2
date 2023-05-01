/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("hobbits").truncate();
  await knex("hobbits").insert([
    { id: 1, name: "sam" },
    { id: 2, name: "frodo" },
    { id: 3, name: "pippin" },
    { id: 4, name: "merry" },
  ]);
};
