var cfg = {
        "_id": "my-replica-set",
        "members": [
            {
                "_id": 0,
                "host": "mongodb_p:27017",
                "priority": 2
            },
            {
                "_id": 1,
                "host": "mongodb_r1:27017",
                "priority": 0
            },
            {
                "_id": 2,
                "host": "mongodb_r2:27017",
                "priority": 0
            }
        ]
    };
rs.initiate(cfg, { force: true });
rs.reconfig(cfg, { force: true });
db.getMongo().setReadPref('nearest');
