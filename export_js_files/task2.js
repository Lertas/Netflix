print("country^series")
cursor = db.netflix.aggregate([{$match:{"type":"TV Show"}},{$unwind:"$country"},{$sortByCount:"$country"}])
while (cursor.hasNext()) {
    jsonobject = cursor.next();
    print(jsonobject._id.valueOf() + "^" + jsonobject.count)
}
