import * as Minio from 'minio'

const minioClient = new Minio.Client({
  endPoint: 'localhost',
  port: 9000,
  // useSSL: true,
  useSSL: false,
  accessKey: '4FrUvBqQ0XSjGo8YT1l9',
  secretKey: 'sAX6sTDXgkdXPaQZXxIMRMGjDTgSlCG6tmYWCPiJ',
})

minioClient.listBuckets((err, buckets) => {
  if (err) return console.log(err)
  console.log('buckets :', buckets)
})