print("show_id^type^title")
cursor = db.netflix.find({date_added:/2019/}, {show_id:1, type:1, title:1, _id:0})
while (cursor.hasNext()) {
    jsonobject = cursor.next();
    print(jsonobject.show_id.valueOf() + "^" + jsonobject.type + "^" + jsonobject.title)
}
