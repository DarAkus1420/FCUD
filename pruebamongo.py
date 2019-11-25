import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

dblist = myclient.list_database_names()


mydb = myclient["fcudDb"]

myCol = mydb["Usuarios"]

myDict = {"name": "John", "address": "Highway 37"}

x = myCol.insert_one(myDict)
print(x.inserted_id)