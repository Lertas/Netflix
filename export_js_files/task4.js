print("actor^productions")
cursor = db.netflix.aggregate([{$unwind:"$cast"},{$sortByCount:"$cast"},{$limit:20}])
while (cursor.hasNext()) {
    jsonobject = cursor.next();
    print(jsonobject._id.valueOf() + "^" + jsonobject.count)
}
