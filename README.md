# dystonse-website

**This repository contains code for a deprecated part of the project and is no longer maintained or updated. Whatever you may be looking for here - proceed with care, it's probably very outdated!**

If you're looking for a website with info about the dystonse project, you might want to look at [our blog](http://blog.dystonse.org/) instead.

---

**This repository is a part of the multi-repository project `dystonse`. See the [main repository](https://github.com/dystonse/dystonse) for more information.**

<p align="center">
  <img src="https://github.com/lenaschimmel/dystonse-website/blob/master/doc/screenshot1.jpg?raw=true" alt="Screenshot of the Dystonse website"/>
</p>

This is a web frontend for [dystonse-search-node](https://github.com/dystonse/dystonse-search-node), and later on for [dystonse-search-rust](https://github.com/dystonse/dystonse-search-rust). It also contains some static information about the project and its status.

## Try it!
**The prototype of the Dystonse website is available at [dystonse.org](https://dystonse.org) - there you can test the algorithm and read about the background of this project.**

You can also follow [@dystonse](https://twitter.com/dystonse) on Twitter.

## Technical details
This site uses (among other packages):

* vue
* vuetify
* mapbox
* several vbb-modules
* socket.io

## Deployment
 * `npm run build`
 * Upload (currently not automated. We use e.g. FileZilla to upload the new version)
