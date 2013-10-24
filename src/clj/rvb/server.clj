(ns rvb.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.resource :as resources]
            [ring.util.response :as response])
  (:gen-class))

(defn render-app []
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body
   (str "<!DOCTYPE html>"
        "<html>"
        "<head>"
        "<link rel=\"stylesheet\" href=\"css/page.css\" />"
        "</head>"
        "<body>"
        "<canvas id='game' height='800' width='800'></canvas>"
        "<script src='http://code.jquery.com/jquery-1.10.1.min.js'></script>"
        "<script src='js/cljs.js'></script>"
        "</body>"
        "</html>")})

(defn handler [request] (render-app))

(def app
  (-> handler
    (resources/wrap-resource "public")))

(defn -main [& args]
  (jetty/run-jetty app {:port 3000}))
