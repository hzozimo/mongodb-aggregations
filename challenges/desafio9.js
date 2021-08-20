db.trips.aggregate([
  { $match: {
    $and: [{ birthYear: { $exists: 1 } }, { birthYear: { $ne: "" } }],
  } },
  { $group: {
    _id: 0,
    maiorAnoNascimento: { $max: { $toInt: "$birthYear" } },
    menorAnoNascimento: { $min: { $toInt: "$birthYear" } },
  } },
  { $project: {
    _id: 0,
    maiorAnoNascimento: "$maiorAnoNascimento",
    menorAnoNascimento: "$menorAnoNascimento",
  } },
]);
