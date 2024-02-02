# slidev-theme-nws

An NWS theme for [Slidev](https://sli.dev).

## Configuration

### Syntax Highlighting

At the moment, the theme `tokyo-night` needs to be added to your slides' repository manually. This is because the built-in version of the theme isn't in the dependant upstream release of Shiki yet (see also shikijs/textmate-grammars-themes#16).

To add the theme, [copy it from GitHub](https://github.com/shikijs/textmate-grammars-themes/blob/main/packages/tm-themes/themes/tokyo-night.json) and paste it into the file `styles/tokyo-night.json`.

### Footer

The footer can be configured by setting the following variables in the frontmatter of your first slide:

```yaml
twitter: your_twitter_handle
event: your_event_name
```

If you leave out one of the variables, the footer won't render the respective element.

### Layouts

#### Cover

The cover layout will render a cover slide with a title and subtitle.

The cover of your slides can be configured by adding the following frontmatter to a slide:

```yaml
layout: cover
```

In addition, it will display the `author`, `event`, and `date` variables from the frontmatter of your slides' first slide, if present.


#### Speaker

The speaker layout can be used to display a picture of you, along with some introductory information or facts.

The speaker layout can be used by adding the following frontmatter to a slide:

```yaml
layout: speaker
image: /path/to/image  # optional
```

#### Section

The section layout shows a single heading (and optionally a subheading) and is intended to be used as a section divider.

The section layout can be used by adding the following frontmatter to a slide:

```yaml
layout: section
```
