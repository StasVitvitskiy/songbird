import birdsData from "./birdsData.js";
import { execSync } from "child_process"
import axios from "axios"
import path from "path"
import fs from "fs"
import process from "process"

const buffer = execSync("GOOGLE_APPLICATION_CREDENTIALS=~/Downloads/2a4cd908c439.json gcloud auth application-default print-access-token")
const bearer = buffer.toString("utf-8")

const ruDescriptions = birdsData.reduce(
    (rowAcc, row) => ({
      ...rowAcc,
      ...row.reduce(
          (birdAcc, bird) => ({
            ...birdAcc,
            [bird.name]: bird.description
          }),
          {}
      )
    }),
    {}
)
fs.writeFileSync(
    path.join(process.cwd(), "ru_descriptions.json"),
    JSON.stringify(ruDescriptions)
)

Promise.all(
    Object.entries(ruDescriptions).map(
        async ([name, description]) => {
          const {data: {data: {translations: [{translatedText}]}}} = await axios.post(
              "https://translation.googleapis.com/language/translate/v2",
              {
                "q": description,
                "source": "ru",
                "target": "en",
                "format": "text"
              },
              {
                headers: {
                  Authorization: `Bearer ${bearer.trim()}`,
                  "content-type": "application/json; charset=utf-8",
                }
              }
          )
          return [name, translatedText]
        }
    )
).then(entries => {
  fs.writeFileSync(
      path.join(process.cwd(), "en_translations.json"),
      JSON.stringify(
          Object.fromEntries(entries)
      )
  )
})

// const translations = birdsData.reduce(
//     (rowAcc, row) => {
//       return Object.assign(
//           rowAcc,
//           row.reduce(async (birdAcc, bird) => {
//             console.log(
//                 "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
//                 `Bearer ${bearer}`
//             )
//             const {data: {data: {translations: [{translatedText}]}}} = await axios.post(
//                 "https://translation.googleapis.com/language/translate/v2",
//                 {
//                   "q": bird.description,
//                   "source": "ru",
//                   "target": "en",
//                   "format": "text"
//                 },
//                 {
//                   headers: {
//                     Authorization: `Bearer ${bearer.trim()}`,
//                     "content-type": "application/json; charset=utf-8",
//                   }
//                 }
//             )
//             console.log("!!!!!!!!!!!!!!!!!!!!!!! 123", translatedText)
//             return {
//               ...birdAcc,
//               [bird.name]: translatedText
//             }
//           }, rowAcc)
//       )
//     },
//     {}
// )
//
// console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 456", translations)
// fs.writeFileSync(
//     path.join(process.cwd(), "translations.json"),
//     JSON.stringify(translations),
// )