print("genre^productions")
cursor = db.netflix.aggregate([{$unwind:"$listed_in"},{$sortByCount:"$listed_in"}])
while (cursor.hasNext()) {
    jsonobject = cursor.next();
    print(jsonobject._id.valueOf() + "^" + jsonobject.count)
}
