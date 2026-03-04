import { gql } from '@apollo/client'

export const GET_ARTICLE_TEASERS = gql`
  query GetArticleTeasers($first: Int = 10) {
    nodeArticles(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        changed {
          timestamp
        }
        ... on NodeArticle {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_ARTICLE_BY_PATH = gql`
  query GetArticleByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription { processed summary }
        heroImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
        statsItems { ... on ParagraphStatItem { id title description { processed } icon } }
        featuredItemsTitle
        ctaTitle
        ctaDescription { processed summary }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeArticle {
            id
            title
            body {
              processed
            }
            created {
              timestamp
            }
            changed {
              timestamp
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            featuresTitle
            featuresSubtitle
            featuresItems {
              ... on ParagraphFeatureItem {
                id
                title
                description {
                  processed
                }
                icon
              }
            }
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

export const GET_EVENTS = gql`
  query GetEvents($first: Int = 10) {
    nodeEvents(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeEvent {
          body { processed summary }
          eventImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          eventDate { timestamp }
          eventTime
          venueName
          venueAddress
          dressCode
          eventOrder
        }
      }
    }
  }
`

export const GET_EVENT_BY_PATH = gql`
  query GetEventByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeEvent {
            id
            title
            path
          body { processed summary }
          eventImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          eventDate { timestamp }
          eventTime
          venueName
          venueAddress
          dressCode
          eventOrder
          }
        }
      }
    }
  }
`

export const GET_STORY_CHAPTERS = gql`
  query GetStoryChapters($first: Int = 10) {
    nodeStoryChapters(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeStoryChapter {
          body { processed summary }
          chapterImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          chapterDate
          chapterLocation
          chapterOrder
        }
      }
    }
  }
`

export const GET_STORY_CHAPTER_BY_PATH = gql`
  query GetStoryChapterByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeStoryChapter {
            id
            title
            path
          body { processed summary }
          chapterImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          chapterDate
          chapterLocation
          chapterOrder
          }
        }
      }
    }
  }
`

export const GET_RSVP_INFOS = gql`
  query GetRsvpInfos($first: Int = 10) {
    nodeRsvpInfos(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created { timestamp }
        ... on NodeRsvpInfo {
          body { processed summary }
          infoImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          infoCategory
          contactInfo
          deadline
          infoOrder
        }
      }
    }
  }
`

export const GET_RSVP_INFO_BY_PATH = gql`
  query GetRsvpInfoByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeRsvpInfo {
            id
            title
            path
          body { processed summary }
          infoImage { url alt width height variations(styles: [LARGE, MEDIUM, THUMBNAIL]) { name url width height } }
          infoCategory
          contactInfo
          deadline
          infoOrder
          }
        }
      }
    }
  }
`
