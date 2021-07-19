print("actor^genre^works")
cursor = db.netflix.aggregate([{$unwind:"$cast"},{$unwind:"$listed_in"},{$group:{_id:{cast:"$cast", listed_in:"$listed_in"},counter:{$sum:1}}},{$sort:{"_id.cast":1, counter:-1, "_id.listed_in":1}},{$group:{_id:{actor:"$_id.cast"},genre:{$first:"$_id.listed_in"},counter:{$first:"$counter"}}},{$sort:{"_id.actor":1}}])
while (cursor.hasNext()) {
    jsonobject = cursor.next();
    print(jsonobject._id.actor.valueOf() + "^" + jsonobject.genre + "^" + jsonobject.counter)
}
