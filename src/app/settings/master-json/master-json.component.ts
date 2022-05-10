import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-master-json',
    templateUrl: './master-json.component.html',
    styleUrls: ['./master-json.component.scss']
})
export class MasterJsonComponent implements OnInit {

    constructor() { }

    codeSnippet = `
  {
    "onId": "onnet",
    "title": "title",
    "categoryType": "categoryName",
    "longDesc": "longDescription",
    "shortDesc": "shortDescription",
    "cast": [
        "actors"
    ],
    "releaseDate": "releaseDate",
    "genre": [
        "genre"
    ],
    "year": "releaseYear",
    "searchTags": [
        "searchKeywords"
    ],
    "director": [
        "directors"
    ],
    "studio": null,
    "country": null,
    "authors": [
        "authors"
    ],
    "ageRating": "pcVodLabel",
    "duration": "duration",
    "advisoryTags": [
        "snpTags"
    ],
    "adultContent": "kidsSafe",
    "isOnAir": "isOnAir",
    "firstUpdated": "onnet",
    "lastUpdated": "onnet",
    "contentAssets":
    {
        "posterLandscape": null,
        "bannerLandscape": "programImage",
        "thumbnailLandscape": "thumbnail",
        "posterPortrait": "poster",
        "bannerPortrait": null,
        "thumbnailPortrait": null,
        "trailer": null,
        "contentSprite": "tvSpriteImageUrl"
    },
    "providerData": [
        {
            "providerName": "SonyLiv",
            "providerSupportType": 1,
            "providerTier": 1,
            "providerContentId": "contentId",
            "premiumContent": "value",
            "promotedContent": false,
            "audioLanguage": [
                "metadataLanguage"
            ],
            "surroundSoundSupport": "isSurroundSound",
            "downloadable": false,
            "subtitleAvailable": false,
            "freeCountries": [
                "freeCountries"
            ],
            "geoblockedCountries": [
                "blockedCountries"
            ],
            "originalContent": null,
            "advertising": "advertising",
            "providerFileUrl": "fileUrl",
            "drmId": "drmVideoKid",
            "fileKey": "fileKey",
            "contentContractEnd": "contractEndDate",
            "providerLinks":
            {
                "webLink": "deeplinkUrlPlayer",
                "androidLink": "deeplinkPlayer",
                "iosLink": "deeplinkPlayer",
                "patchLink": "deeplinkPatch",
                "deeplink": "deeplink",
                "web": "webUrl"
            }
        }
    ],
    "providerSeriesId": "seriesId",
    "onSeriesId": "onnet",
    "season": "season",
    "seasonTitle": null,
    "seriesDesc": "programDescription",
    "episode": "episodeNumber",
    "episodeTitle": "episodeTitle",
    "episodeShortDesc": "shortDescription",
    "episodeLongDesc": "programDescription",
    "episodeTrailer": null,
    "episodeCast": [
        "actors"
    ],
    "isEpidodePopular": false,
    "comingSoon": "comingSoon",
    "onDeepStorage": false,
    "onMetaScore": null,
    "imdbScore": null,
    "rottenScore": null,
    "seriesAssets":
    {
        "seasonPosterLandscape": "seriesImage",
        "seasonPosterPortrait": null,
        "seasonBannerLandscape": "seriesImage",
        "seasonBannerPortrait": null,
        "seasonThumbnailLandscape": "seriesImage",
        "seasonThumbnailPortrait": null,
        "seasonTrailer": null,
        "episodePosterLandscape": "poster",
        "episodePosterPortrait": null,
        "episodeBannerLandscape": "programImage",
        "episodeBannerPortrait": null,
        "episodeThumbnailLandscape": "thumbnail",
        "episodeThumbnailPortrait": null,
        "episodeTrailer": null,
        "episodeSprite": "spriteImageUrl"
    },
    "removedContent": false
  }`;

    ngOnInit(): void {

    }

}
